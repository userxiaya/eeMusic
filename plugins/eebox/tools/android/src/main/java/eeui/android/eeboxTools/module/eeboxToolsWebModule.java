package eeui.android.eeboxTools.module;

import android.widget.Toast;

import com.alibaba.fastjson.JSONObject;

import app.eeui.framework.extend.module.eeuiJson;
import app.eeui.framework.extend.view.ExtendWebView;
import app.eeui.framework.extend.view.webviewBridge.JsCallback;
import eeui.android.audio.module.WeexaudioModule;

/**
 * web-view模块组件
 */
public class eeboxToolsWebModule {
    /**
     * 简单演示
     * @param webView
     * @param msg
     */
    public static void simple(ExtendWebView webView, String msg) {
        Toast.makeText(webView.getContext(), msg, Toast.LENGTH_SHORT).show();
    }

    /**
     * 获取图片颜色
     * @param callback
     */
    public static void getImageBackground(ExtendWebView webView, final String url, final JsCallback callback) {
        tools.getImageBackground(url,callback);
    }

//    public static void playSong(ExtendWebView webView, String object) {
//        WeexaudioModule audio = new WeexaudioModule();
//        JSONObject json = eeuiJson.parseObject(object);
////        audio.play(json.getString("url"));
//        String songName = json.getString("songName");
//        String artistName = json.getString("artistName");
//        String imgUrl = json.getString("imgUrl");
//        audio.notifyMusic(songName, artistName, imgUrl);
//    }

    /**
     * 同步返回演示
     * @param webView
     * @param msg
     * @return
     */
    public static String retMsg(ExtendWebView webView, String msg) {
        return "返回：" + msg;
    }
}
