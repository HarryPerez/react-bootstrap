# Bootstrap - React Native

# Prerequisites

Follow the [official guide](https://reactnative.dev/docs/environment-setup) to properly setup your environment.

# Setting up our repo

### Google Services files setup

Download Google Services files from Firebase console and add in the correct location:

#### Android

`android/app/google-services.json`

#### IOS

`ios/GoogleService-Info.plist`


### ENV setup

---

Each environment has its env file with the following filename format:  
`.env.[environment]`

These are the existing envs

`.env.development`  
`.env.production`  

This is the format of every env file

```
# Backend
API_BASE_URL=https://XXXXXXXX
```

---

### Android

If you need to generate an apk or aab, you should replace the credentials for the keystore in the `android/app/build.gradle`.

To generate a new keystore file for a new country, follow these steps:

```
$ keytool -genkey -v -keystore my_proyect-key.keystore -alias my_proyect-key -keyalg RSA -keysize 2048 -validity 10000

Enter keystore password: xxxxx
Re-enter new password: xxxxx
What is your first and last name?
  [Unknown]:  zerf
What is the name of your organizational unit?
  [Unknown]:  zerf
What is the name of your organization?
  [Unknown]:  zerf
What is the name of your City or Locality?
  [Unknown]:  zerf
What is the name of your State or Province?
  [Unknown]:  zerf
What is the two-letter country code for this unit?
  [Unknown]:  wx
Is CN=zerf, OU=zerf, O=zerf, L=zerf, ST=zerf, C=wx correct?
  [no]:  yes

Generating 2,048 bit RSA key pair and self-signed certificate (SHA256withRSA) with a validity of 10,000 days
	for: CN=zerf, OU=zerf, O=zerf, L=zerf, ST=zerf, C=wx
Enter key password for <my_proyect-key>
	(RETURN if same as keystore password):  xxxxx
Re-enter new password: xxxxx
[Storing my_proyect-key.keystore]
```

### Fastlane setup

---

Each environment has its env file with the following filename format: 

These are the existing envs:

`.env.development`  
`.env.production`  

This is the format of every env file

```
FIREBASE_ANDROID_APP_ID='XXXXXX'
FIREBASE_IOS_APP_ID='XXXXXX'
FIREBASE_CLI_TOKEN='XXXXXXX'
```

This file should be placed inside the fastlane directory of android and ios

---