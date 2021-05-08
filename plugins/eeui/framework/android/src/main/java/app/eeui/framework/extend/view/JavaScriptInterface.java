package app.eeui.framework.extend.view;

import android.annotation.TargetApi;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.os.Build;
import android.os.Environment;
import android.os.Handler;
import android.util.Base64;
import android.util.Log;
import android.view.Gravity;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.core.app.NotificationCompat;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;


import app.eeui.framework.R;

import static android.content.Context.NOTIFICATION_SERVICE;

public class JavaScriptInterface {
    private Context context;
    private NotificationManager nm;

    public JavaScriptInterface(Context context) {
        this.context = context;
    }

    @JavascriptInterface
    public void getBase64FromBlobData(String base64Data, String fileName, String ext) throws IOException {
        convertBase64StringToPdfAndStoreIt(base64Data, fileName, ext);
    }

    @JavascriptInterface
    public void playMusicFromBlobData(String base64Data, String fileName, String ext) throws IOException {
        Context contextNew = this.context;
        if (fileName == null || ext == null) {
            Toast toastErr = Toast.makeText(contextNew, "播放失败，文件名异常", Toast.LENGTH_LONG);
            toastErr.setGravity(Gravity.TOP, 0, 200);
            toastErr.show();
            return;
        }
        String dir = "." + ext;

        final File dwldsPath = new File(Environment.getExternalStoragePublicDirectory(
                Environment.DIRECTORY_DOWNLOADS) + "/" + fileName + dir);
        if (dwldsPath.exists()) {
            String url = dwldsPath.getPath();
            Log.i("eeeext", "abaab");
//            if (MusicService.getService().playNext(url)) {
//                return;
//            }
//            Log.i("eeeext", dwldsPath.getPath());
        }

    }

    public static String getBase64StringFromBlobUrl(String blobUrl) {
        if (blobUrl.startsWith("blob")) {
            return "javascript: var xhr = new XMLHttpRequest();" +
                    "xhr.open('GET', '" + blobUrl + "', true);" +
                    "xhr.setRequestHeader('Content-type','audio/*');" +
                    "xhr.responseType = 'blob';" +
                    "xhr.onload = function(e) {" +
                    "    if (this.status == 200) {" +
                    "        var blobFile = this.response;" +
                    "        var reader = new FileReader();" +
                    "        reader.readAsDataURL(blobFile);" +
                    "        reader.onloadend = function() {" +
                    "            base64data = reader.result;" +
                    "            Android.getBase64FromBlobData(base64data, (window.newAudio || {}).title || null, (window.newAudio || {}).ext || null);" +
                    "        }" +
                    "    }" +
                    "};" +
                    "xhr.send();";
        }
        return "javascript: console.log('It is not a Blob URL');";
    }

    @TargetApi(Build.VERSION_CODES.O)
    private NotificationChannel createNotificationChannel(String channelId, String channelName, int importance) {
        NotificationChannel channel = new NotificationChannel(channelId, channelName, importance);
        NotificationManager notificationManager = (NotificationManager) context.getSystemService(NotificationManager.class);
        notificationManager.createNotificationChannel(channel);
        return channel;
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    private void convertBase64StringToPdfAndStoreIt(String base64File, String fileName, String ext) throws IOException {

        Context contextNew = this.context;

        if (fileName == null || ext == null) {
            Log.i("download", "下载失败，文件名异常");
            Toast toastErr = Toast.makeText(contextNew, "下载失败，文件名异常", Toast.LENGTH_LONG);
            toastErr.setGravity(Gravity.TOP, 0, 200);
            toastErr.show();
            return;
        }
        String dir = "." + ext;

        final int notificationId = 5;
        final File dwldsPath = new File(Environment.getExternalStoragePublicDirectory(
                Environment.DIRECTORY_DOWNLOADS) + "/" + fileName + dir);
        Log.i("file-path", dwldsPath.getPath());
        if (dwldsPath.exists()) {
            String channelId = "web_download";
            String channelName = "下载消息";
            int importance = NotificationManager.IMPORTANCE_HIGH;
            NotificationManager manager = (NotificationManager) context.getSystemService(NOTIFICATION_SERVICE);
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                NotificationChannel channel = createNotificationChannel(channelId, channelName, importance);
            }
            NotificationCompat.Builder b = new NotificationCompat.Builder(this.context, channelId)
                    .setDefaults(NotificationCompat.DEFAULT_ALL)
                    .setWhen(System.currentTimeMillis())
                    .setSmallIcon(R.drawable.download)
                    .setContentTitle("下载")
                    .setContentText(fileName);
            nm = (NotificationManager) this.context.getSystemService(NOTIFICATION_SERVICE);
            if (nm != null) {
                nm.notify(notificationId, b.build());
                Handler h = new Handler();
                long delayInMilliseconds = 2000;
                h.postDelayed(new Runnable() {
                    public void run() {
                        Toast toastSucc = Toast.makeText(contextNew, "下载成功", Toast.LENGTH_SHORT);
                        toastSucc.setGravity(Gravity.TOP, 0, 200);
                        toastSucc.show();
                        nm.cancel(notificationId);
                    }
                }, delayInMilliseconds);
            }
        }
        byte[] pdfAsBytes = Base64.decode(base64File.replaceFirst("^data:audio/" + ext + ";base64,", ""), 0);
        FileOutputStream os;
        os = new FileOutputStream(dwldsPath, false);
        os.write(pdfAsBytes);
        os.flush();
    }
}
