# View Who Liked Your OkCupid Profile

This project contains scripts and configurations for hooking into the OkCupid Android application using Frida and Objection. The Frida script allows you to see who "liked" your profile in the "Discover" tab.

## ⚠️ Disclaimer ⚠️

I DO NOT take any responsibility for security issues or bans.

## Files

1. `okc.js`

A Frida script used to hook and modify specific behaviors in the OkCupid app. Allowing you to see who "liked" your profile in the "Discover" tab.

2. `objection.cfg.json`

Configuration file for Objection.

3. `patch.sh`

A shell script to automate the patching of the OkCupid APK using Objection and Frida.

## Usage

### Prerequisites

- Android device or emulator with the OkCupid app installed.

- Frida installed on both the host machine and the Android device.

- Objection installed (`pip install objection`).

### Steps to Run

1. Patch the APK using the provided script:

`./patch.sh`

2. Install the patched APK on your device or go to [releases](https://github.com/Seadox/OKC-Likes-Viewer/releases) and dowload the apk file to your deivce.

`adb install -r OKCupid_app-version_CPU-architecture.apk`

## Before and After Images

![Before & after](/before_after.jpg)

## Patched Versions

Patched APK files are available for specific CPU architectures. Make sure to download the correct version for your device.

### How to Check Your Device's CPU Architecture

To check your device's CPU architecture, you can use one of the following methods:

- **Using ADB:** Run the following command:

`adb shell getprop ro.product.cpu.abi`

This will return the CPU architecture, such as `arm64-v8a` or `armeabi-v7a`.

- **Using a Terminal on the Device:** If you have a terminal app installed, you can check with:

`getprop ro.product.cpu.abi`

- **Using a Third-Party App.**

## Known Issues

- After logging in, you may encounter an error message prompting you to update the app. Simply reopen the app, and you will be logged in successfully.
- The app disconnects the user every few hours.
