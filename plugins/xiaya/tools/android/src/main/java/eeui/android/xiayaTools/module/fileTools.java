package eeui.android.xiayaTools.module;

import android.Manifest;
import android.annotation.SuppressLint;
import android.os.Environment;
import android.os.Handler;
import android.os.Looper;
import android.util.Base64;
import android.util.Log;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

import app.eeui.framework.extend.module.utilcode.util.PermissionUtils;
import app.eeui.framework.extend.view.webviewBridge.JsCallback;


public class fileTools {
    private static ArrayList<Map<String, Object>> scanedFiles = new ArrayList<Map<String, Object>>();
    /*扫描线程*/
    private static Thread scanThread;
    /*定时器  用于定时检测扫描线程的状态*/
    private static Timer scanTimer;
    /*检测扫描线程的任务*/
    private static TimerTask scanTask;
    private static JsCallback webViewCallback;

    // webview callback 主线程执行
    private static void webViewCall(final Map data) {
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                if (webViewCallback != null) {
                    try {
                        webViewCallback.apply(data);
                    } catch (JsCallback.JsCallbackException e) {
                        e.printStackTrace();
                    }
                }
            }
        });
    }

    public static void getFileList(final String[] dirList) {
        startScan(dirList);
    }

    public static void getFileList_web(final String[] dirList, JsCallback call) {
        webViewCallback = call;
        startScan(dirList);
    }

    /*开始扫描*/
    @SuppressLint("WrongConstant")
    private static void startScan(final String[] dirList) {
        cancelTask();
        PermissionUtils.permission(Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE)
                .callback(new PermissionUtils.FullCallback() {
                    @Override
                    public void onGranted(List<String> permissionsGranted) {
                        scanedFiles.clear();
                        /*根目录*/
                        final String rootPath = Environment.getExternalStorageDirectory().getAbsolutePath();
                        /*要扫描的文件后缀名*/
                        final File dir = new File(rootPath);
                        if (dir.listFiles() == null) {
                            Map<String, Object> result = new HashMap<>();
                            result.put("state", "error");
                            result.put("fileList", scanedFiles);
                            if (webViewCallback != null) {
                                webViewCall(result);
                            }
                            return;
                        }
                        scanThread = new Thread(new Runnable() {
                            @Override
                            public void run() {
                                scanFile(dir, dirList);
                            }
                        });
                        /*判断扫描是否完成 其实就是个定时任务 时间可以自己设置  每2s获取一下扫描线程的状态  如果线程状态为结束就说明扫描完成*/
                        scanTimer = new Timer();

                        scanTask = new TimerTask() {
                            @Override
                            public void run() {
                                Log.i("线程状态", scanThread.getState().toString());
                                if (scanThread.getState() == Thread.State.TERMINATED) {
                                    /*说明扫描线程结束 扫描完成  更新ui*/
                                    cancelTask();
                                    Map<String, Object> result = new HashMap<>();
                                    result.put("state", "success");
                                    result.put("fileList", scanedFiles);
                                    if (webViewCallback != null) {
                                        webViewCall(result);
                                    }
                                }
                            }
                        };

                        scanTimer.schedule(scanTask, 0, 1000);
                        /*开始扫描*/
                        scanThread.start();
                    }

                    @Override
                    public void onDenied(List<String> permissionsDeniedForever, List<String> permissionsDenied) {

                    }
                }).request();

    }


    /*扫描*/
    private static void scanFile(File dir, String[] dirList) {
        File[] files = dir.listFiles();
        if (files != null && files.length > 0) {
            for (final File file : files) {
                /*是符合后缀名的文件  添加到列表中*/
                if (isDir(file, dirList)) {
                    Log.i(file.getName(),file.length()+"");
                    //3mb以上
                    if (file.length() >= 1024 * 1024 * 3) {
                        scanedFiles.add(getFileData(file));
                    }
                }
                /*是目录*/
                if (file.isDirectory()) {
                    /*递归扫描*/
                    scanFile(file, dirList);
                }
            }
        }
    }

    private static void cancelTask() {
        Log.i("cancelTask", "结束任务");
        if (scanTask != null) {
            scanTask.cancel();
        }
        if (scanTimer != null) {
            scanTimer.purge();
            scanTimer.cancel();
        }
    }

    private static Boolean isDir(File file, String[] dirList) {
        String fileName = file.getName().toUpperCase();
        Boolean result = false;
        for (int i = 0; i < dirList.length; i++) {
            String key = dirList[i];
            if (fileName.endsWith(key)) {
                result = true;
                break;
            }
        }
        return result; //false
    }

    private static Map<String, Object> getFileData(File file) {
        Map<String, Object> fileData = new HashMap<>();
        fileData.put("fileName", file.getName());
        fileData.put("path", "file://" + file.getPath());
        return fileData;
    }

    public static String fileToBase64(String filePath) {
        String newUrl = filePath.replace("file://", "");
        File file = new File(newUrl);
        String base64 = null;
        InputStream in = null;
        try {
            in = new FileInputStream(file);
            byte[] bytes = new byte[in.available()];
            int length = in.read(bytes);
            base64 = Base64.encodeToString(bytes, 0, length, Base64.DEFAULT);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (in != null) {
                    in.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return base64;
    }
}
