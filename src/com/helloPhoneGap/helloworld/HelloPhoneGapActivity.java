package com.helloPhoneGap.helloworld;

//import android.app.Activity;
import com.phonegap.*;
import android.os.Bundle;

public class HelloPhoneGapActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.main);
        //super.loadUrl("file:///android_asset/www/ProductDetail/index.html");
        //super.loadUrl("file:///android_asset/Helper/index.html");
        //super.loadUrl("file:///android_asset/Helper/111.html");
        //super.loadUrl("file:///android_asset/video/video.html");
        //super.loadUrl("file:///android_asset/phonegapApi/connection.html");
        super.loadUrl("http://changpc.com/googlemap.html");
    }
}