package eeui.android.xiayaTools.module;

import android.util.Log;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.Map;

import app.eeui.framework.extend.base.WXModuleBase;


public class xiayaToolsAppModule extends WXModuleBase {
    public xiayaToolsAppModule() {
        if (!EventBus.getDefault().isRegistered(this)) {
            EventBus.getDefault().register(this);
        }
    }
    /**
     * 获取文件列表
     *
     * @param list
     * @return
     */
    @JSMethod
    public static void getFileList( String[] list, final JSCallback callback) {
//        Map<String, Object> result = new HashMap<>();
//        result.put("state","error");
//        result.put("fileList",list);
//        try {
//            callback.apply(result);
//        } catch (JsCallback.JsCallbackException e) {
//            e.printStackTrace();
//        }
    }
    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(Map<String, Object> result) {
        Log.i("onEventDatas1","bb");
    }
}
