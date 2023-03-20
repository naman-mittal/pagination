package com.pagination;

import android.os.Build;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

public class NativeCalculationModule extends ReactContextBaseJavaModule {

    NativeCalculationModule(ReactApplicationContext context) {
        super(context);
    }


    @Override
    public String getName() {
        return "NativeCalculationModule";
    }

    @ReactMethod
    public void performCalculation(int multiple1, int multiple2, Callback callback){
        try{
            int res = multiple1 * multiple2;
            String deviceName = getDeviceName();
            WritableMap result = new WritableNativeMap();
            result.putString("result",res+"");
            result.putString("device",deviceName);
            callback.invoke(null,result);
        }
        catch(Exception err){
            callback.invoke(err.getMessage(),null);
        }

    }

    private static String getDeviceName() {
        String manufacturer = Build.MANUFACTURER;
        String model = Build.MODEL;
        if (model.startsWith(manufacturer)) {
            return capitalize(model);
        } else {
            return capitalize(manufacturer) + " " + model;
        }
    }
    private static String capitalize(String s) {
        if (s == null || s.length() == 0) {
            return "";
        }

        return Character.toUpperCase(s.charAt(0)) + s.substring(1);

    }

}