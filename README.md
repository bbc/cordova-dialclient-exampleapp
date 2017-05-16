Example Cordova App using `cordova-plugin-dialclient`
=====================================================

A minimal example showing how to discover HbbTV2.0 compatible TVs using the
[`cordova-plugin-dialclient`](https://github.com/bbc/cordova-plugin-dialclient)
library for iOS.

To run this example app in the iOS emulator:

Clone repo and prepare for build:
	$ git clone https://github.com/bbc/cordova-dialclient-exampleapp.git
	$ cd cordova-dialclient-exampleapp
	$ cordova prepare
Choose a target emulator and run:
	$ ios-sim showdevicetypes
	$ cordova emulate ios --target="iPhone-6s-Plus, 10.3"
If a build command (`ProcessProductPackaging`) failure occurs, open `platforms/ios/DialExample.xcworkspace` in XCode and build for a target device.

