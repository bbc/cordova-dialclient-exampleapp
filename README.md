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
	iPhone-4s, 9.0
	iPhone-4s, 9.2
	iPhone-5, 9.0
	iPhone-5, 9.2
	iPhone-5, 10.3
	iPhone-5s, 9.0
	iPhone-5s, 9.2
	iPhone-5s, 10.3
	iPhone-6, 9.0
	iPhone-6, 9.2
	iPhone-6, 10.3
	iPhone-6-Plus, 9.0
	iPhone-6-Plus, 9.2
	iPhone-6-Plus, 10.3
	iPhone-6s, 9.0
	iPhone-6s, 9.2
	iPhone-6s, 10.3
	iPhone-6s-Plus, 9.0
	iPhone-6s-Plus, 9.2
	iPhone-6s-Plus, 10.3
	iPad-2, 9.0
	iPad-2, 9.2
	iPad-Retina, 9.0
	iPad-Retina, 9.2
	iPad-Air, 9.0
	iPad-Air, 9.2
	iPad-Air, 10.3
	iPad-Air-2, 9.0
	iPad-Air-2, 9.2
	iPad-Air-2, 10.3

	$ cordova emulate ios --target="iPhone-6s-Plus, 10.3"
If a build command (`ProcessProductPackaging`) failure occurs, open `platforms/ios/DialExample.xcworkspace` in XCode and build for a target device.

