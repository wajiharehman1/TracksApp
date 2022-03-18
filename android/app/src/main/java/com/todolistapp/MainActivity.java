package com.todolistapp;

import static com.blitzapp.animatedsplash.animation.AddImageView.FIT_XY;
import static com.blitzapp.animatedsplash.animation.AddImageView.getCenterX;
import static com.blitzapp.animatedsplash.animation.AddImageView.getCenterY;
import static com.blitzapp.animatedsplash.animation.Splash.FADE;
import static com.blitzapp.animatedsplash.animation.Splash.SPLASHSLIDELEFT;
import static com.blitzapp.animatedsplash.animation.Splash.createSplashView;
import static com.blitzapp.animatedsplash.animation.Splash.performSingleAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.screenHeight;
import static com.blitzapp.animatedsplash.animation.Splash.screenWidth;
import static com.blitzapp.animatedsplash.animation.Splash.setBackgroundImage;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideDelay;
import static com.blitzapp.animatedsplash.animation.Splash.splashShow;

import android.os.Bundle;

import com.blitzapp.animatedsplash.animation.AddImageView;
import com.facebook.react.ReactActivity;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
      @Override
      protected String getMainComponentName() {
        return "TodoListApp";
      }

        public void onCreate(Bundle saved) {
            super.onCreate(saved);
//            getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
            initiateSplash();
        }

        public void initiateSplash() {
            //Create dialog
            createSplashView(MainActivity.this);
//            getActionBar().hide();

            setBackgroundImage(R.drawable.splash_bg);
            setSplashHideAnimation(SPLASHSLIDELEFT);

            setSplashHideDelay(1500);

//            AddImageView logoImage = new AddImageView(R.drawable.logo, screenHeight * 0.5, screenWidth, 0, 0, AddImageView.FIT_XY, false);
//            AddImageView backgroundImage = new AddImageView(R.drawable.bg, screenHeight * 0.15, screenWidth, 0, screenHeight - screenHeight * 0.15, AddImageView.FIT_XY, false);
//            GroupAnimation group1 = new GroupAnimation();
//            performSingleAnimation(logoImage, SCALE, 780, 0.5f, 1f, 1f, 3f);

            AddImageView image1 = new AddImageView(R.drawable.splash_bg, screenHeight * 1, screenWidth * 1, getCenterX(screenWidth * 1), getCenterY(screenHeight * 1), FIT_XY, false);
            AddImageView image2 = new AddImageView(R.drawable.logo, screenHeight * 0.5, screenHeight * 0.5, getCenterX(screenHeight * 0.5), getCenterY(screenHeight * 0.5), FIT_XY, false);

            performSingleAnimation(image1, FADE, 500, 0f, 1f);
            performSingleAnimation(image2, FADE, 400, 0f, 1f);
            splashShow();
        }
}

