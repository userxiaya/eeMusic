package eeui.android.xiayaTools.module;


import android.util.Log;

import com.alibaba.fastjson.JSONArray;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import app.eeui.framework.extend.view.ExtendWebView;
import app.eeui.framework.extend.view.webviewBridge.JsCallback;


/**
 * web-view模块组件
 */

public class xiayaToolsWebModule {
    /**
     * 获取文件列表
     *
     * @param webView
     * @param arrayStr
     */
    public static void getFileList(ExtendWebView webView, String arrayStr, final JsCallback callback) {
        JSONArray array = JSONArray.parseArray(arrayStr);
        String[] list = new String[array.size()];
        for (int i = 0; i < array.size(); i++) {
            list[i] = array.get(i).toString();
        }
        fileTools.getFileList_web(list,callback);
    }

    /**
     * 同步返回演示
     * @param webView
     * @param filePath
     * @return
     */
    public static Map getFileDataUrl(ExtendWebView webView, String filePath) {
//        String dataUrl = fileTools.fileToBase64(filePath);
        String newUrl = filePath.replace("file://","");
        File file = new File(newUrl);
        Map<String, Object> fileData = new HashMap<>();
        fileData.put("fileName",filePath);
        fileData.put("path",file.getPath());
        return fileData;
    }
}
