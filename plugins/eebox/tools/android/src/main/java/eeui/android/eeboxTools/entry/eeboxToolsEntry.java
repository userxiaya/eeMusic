package eeui.android.eeboxTools.entry;

import android.content.Context;

import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

import app.eeui.framework.extend.annotation.ModuleEntry;
import app.eeui.framework.extend.bean.WebCallBean;
import eeui.android.eeboxTools.module.eeboxToolsWebModule;
import eeui.android.eeboxTools.module.eeboxToolsAppModule;

@ModuleEntry
public class eeboxToolsEntry {

    /**
     * APP启动会运行此函数方法
     * @param content Application
     */
    public void init(Context content) {

        //1、注册weex模块
        try {
            WXSDKEngine.registerModule("eeboxTools", eeboxToolsAppModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }

        //2、注册web模块（web-view模块可通过requireModuleJs调用，调用详见：https://eeui.app/component/web-view.html）
        WebCallBean.addClassData("eeboxTools", eeboxToolsWebModule.class);
    }
}
