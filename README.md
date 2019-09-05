<p align="center">
	<img src="https://avatars3.githubusercontent.com/t/3393113?s=280&v=4" alt="">
	<h3 align="center">B3Runtime Mobile App</h3>
	<p align="center">
		En tipspromenad på tid - i mobilen!		
	</p>
</p>

---

## Install

This app is built using [Ionic](https://ionicframework.com). Start by installing the **Ionic CLI** and **Cordova** on your computer using the following command:

```bash
$ sudo npm install -g ionic cordova
```

Then you will need to install the npm modules required outside of Ionic's framework:

```bash
$ npm install
```

## Running the app

### In the browser

To run the app in the browser, simply run the following command in the root folder

```bash
$ ionic serve
```

This will have the app running while you develop. You can find more information on how you can run the app using the [Ionic Documentation](https://ionicframework.com/docs)

### On Android / iOS

The easy way of testing the app is using the Ionic DevApp which is available on [Google Play Store](https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en) and [AppStore](https://apps.apple.com/us/app/ionic-devapp/id1233447133?ls=1). After you have installed the DevApp on your device, you will first need to create an account at Ionic (or login if you already have one) and then make sure that your device is on the same network as the computer you are developing on.

The run the following command to start the app:

```bash
$ ionic serve --devapp
```

This will enable you to connect to the project using the DevApp.

NOTE: In some cases the Ionic DevApp might not connect to the project automatically, then you will need to click *Enter address manually* and input the ip outputted in the terminal after spinning up the project.

Also, some functions might or might not be accessable going the long route of actually building the app. More info on how to do that can be found in the Ionic Documentation: [iOS](https://ionicframework.com/docs/installation/ios) | [Android](https://ionicframework.com/docs/installation/android)

## Documentation

Further documentation and information can be found in the [Wiki](https://github.com/b3it-innovation/b3runtime-app/wiki)