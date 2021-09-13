package eeui.android.audio.service;

import android.annotation.SuppressLint;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.IBinder;
import android.os.StrictMode;
import android.widget.RemoteViews;

import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;

import com.instapp.nat.media.audio.BuildConfig;

import eeui.android.audio.R;
import eeui.android.audio.event.AudioEvent;

public class BackService extends Service {

    private static Context appContext;

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        String url = intent.getStringExtra("url");
        boolean bool = intent.getBooleanExtra("bool", false);
        MusicService.getService().play(url);
        MusicService.getService().setLoop(bool);
        return null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (intent != null) {
            String url = intent.getStringExtra("url");
            boolean bool = intent.getBooleanExtra("bool", false);
            MusicService.getService().play(url);
            MusicService.getService().setLoop(bool);
        } else {
            MusicService.getService().stop();
        }
        return super.onStartCommand(intent, flags, startId);
    }
    @SuppressLint("NewApi")
    @Override
    public void onCreate() {
        super.onCreate();
        appContext = getApplicationContext();
    }

    public static Context getContext () {
        return appContext;
    }

}