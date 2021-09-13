package eeui.android.eeuiDemo.entry;

import android.content.Context;

import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

import app.eeui.framework.extend.annotation.ModuleEntry;
import app.eeui.framework.extend.bean.WebCallBean;
import eeui.android.eeuiDemo.module.eeuiDemoWebModule;
import eeui.android.eeuiDemo.module.eeuiDemoAppModule;

@ModuleEntry
public class eeuiDemoEntry {

    /**
     * APP启动会运行此函数方法
     * @param content Application
     */
    public void init(Context content) {

        //1、注册weex模块
        try {
            WXSDKEngine.registerModule("eeuiDemo", eeuiDemoAppModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }

        //2、注册web模块（web-view模块可通过requireModuleJs调用，调用详见：https://eeui.app/component/web-view.html）
        WebCallBean.addClassData("eeuiDemo", eeuiDemoWebModule.class);
    }
}
