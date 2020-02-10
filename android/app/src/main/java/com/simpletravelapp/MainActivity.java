package com.simpletravelapp;

// RNN
import com.reactnativenavigation.NavigationActivity;

// Splash Screen
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

public class MainActivity extends NavigationActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this); // here
    super.onCreate(savedInstanceState);
  }
}
