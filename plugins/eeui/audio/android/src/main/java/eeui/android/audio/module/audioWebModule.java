package eeui.android.audio.module;

import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.HashMap;
import java.util.Map;

import app.eeui.framework.extend.view.ExtendWebView;
import app.eeui.framework.extend.view.webviewBridge.JsCallback;
import eeui.android.audio.event.AudioEvent;

public class audioWebModule {
    private static JsCallback callback;
    public static void audioWebCallback(ExtendWebView webView, final JsCallback call) {
        callback = call;
    }
    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(AudioEvent e) {
        if (callback == null) {
            return;
        }
        Map<String, Object> data = new HashMap<>();
        data.put("url", e.url == null ? "" : e.url);
        data.put("current", e.current);
        data.put("duration", e.total);
        data.put("percent", (e.total == 0 ? 0 : e.current / (float) e.total));
        switch (e.state) {
            case AudioEvent.STATE_STARTPLAY:
                data.put("status", "start");
                break;
            case AudioEvent.STATE_PLAY:
                data.put("status", "play");
                break;
            case AudioEvent.STATE_COMPELETE:
                data.put("status", "compelete");
                break;
            case AudioEvent.STATE_ERROR:
                data.put("status", "error");
                break;
            case AudioEvent.STATE_SEEK_COMPELETE:
                data.put("status", "seek");
                break;
            case AudioEvent.STATE_BufferingUpdate:
                data.put("status", "buffering");
                break;
            default:
                return;
        }
        try {
            callback.apply(data);
        } catch (JsCallback.JsCallbackException err) {
            err.printStackTrace();
        }
    }
}
