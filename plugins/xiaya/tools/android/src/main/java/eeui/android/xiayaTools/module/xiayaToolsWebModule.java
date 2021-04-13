package eeui.android.xiayaTools.module;


import com.alibaba.fastjson.JSONArray;

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
     * @return
     */
    public static void getFileList(ExtendWebView webView, String arrayStr, final JsCallback callback) {
        JSONArray array = JSONArray.parseArray(arrayStr);
        String[] list = new String[array.size()];
        for (int i = 0; i < array.size(); i++) {
            list[i] = array.get(i).toString();
        }
        fileTools.getFileList_web(list,callback);
//        Map<String, Object> result = new HashMap<>();
//        result.put("state","error");
//        result.put("fileList",list);
//        try {
//            callback.apply(result);
//        } catch (JsCallback.JsCallbackException e) {
//            e.printStackTrace();
//        }
    }
}
