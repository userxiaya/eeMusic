package eeui.android.audio.module;

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
public class audioWebModule {
    /**
     * 播放blob url 音频
     * @param webView
     * @param url
     * @return
     */
    public static void playBlobmusic(ExtendWebView webView, String url) {
        audiotools.setMusicFromBlobUrl(url);
    }
}
