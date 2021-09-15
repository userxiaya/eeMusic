package eeui.android.eeboxTools.module;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import androidx.palette.graphics.Palette;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import app.eeui.framework.extend.view.webviewBridge.JsCallback;
import static app.eeui.framework.extend.module.eeuiColorUtils.int2Hex2;

public class tools {
    /**Color的Int整型转Color的16进制颜色值【方案二】
     * colorInt - -12590395
     * return Color的16进制颜色值——#3FE2C5
     * */


    public static void getImageBackground(final String url, final JsCallback callback) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                URL imageurl = null;
                try {
                    imageurl = new URL(url);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
                try {
                    HttpURLConnection conn = (HttpURLConnection)imageurl.openConnection();
                    conn.setDoInput(true);
                    conn.connect();
                    InputStream is = conn.getInputStream();
                    Bitmap image = BitmapFactory.decodeStream(is);
                    is.close();
                    Palette.from(image).generate(new Palette.PaletteAsyncListener() {
                        @Override
                        public void onGenerated(Palette palette) {
                            Palette.Swatch swatch = palette.getMutedSwatch();
                            //Palette.Swatch swatch = palette.getVibrantSwatch();
                            //Palette.Swatch swatch = palette.getDarkMutedSwatch();
                            //Palette.Swatch swatch = palette.getDarkVibrantSwatch();
                            //Palette.Swatch swatch = palette.getLightMutedSwatch();
                            //Palette.Swatch swatch = palette.getLightVibrantSwatch();
                            if (swatch != null) {
                                try {
                                    callback.apply(int2Hex2(swatch.getRgb()));
                                } catch (JsCallback.JsCallbackException e) {
                                    e.printStackTrace();
                                }
                            } else {
                                try {
                                    callback.apply(null);
                                } catch (JsCallback.JsCallbackException e) {
                                    e.printStackTrace();
                                }
                            }
                        }
                    });

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }
}
