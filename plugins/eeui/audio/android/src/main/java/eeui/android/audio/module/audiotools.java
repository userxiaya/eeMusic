package eeui.android.audio.module;

import android.util.Log;

public class audiotools {
    public static String setMusicFromBlobUrl(String blobUrl) {
        if (blobUrl.startsWith("blob")) {
            Log.i("eeeext", blobUrl);
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
                    "            Android.playMusicFromBlobData(base64data, (window.newAudio || {}).title || null, (window.newAudio || {}).ext || null);" +
                    "        }" +
                    "    }" +
                    "};" +
                    "xhr.send();";
        }
        return "javascript: console.log('It is not a Blob URL');";
    }
}
