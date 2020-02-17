# react-native-coaching

## Pre-requisits
* Local administrative rights
* Visual Studio Code
* nodejs & npm 12.16.0 LTS (https://nodejs.org/en/)
* xcode latest 
* iOS Simulator
* expo cli (https://docs.expo.io/versions/latest/get-started/installation/)


# Day 1

## Step 00
* What is React Native
* Single Thread
* Libraries (link)
* React Native for Web, VR, Windows, Mac, ...

## Step 01 Create a core react native project
npx react-native init reactnativecoaching --template react-native-template-typescript 
cd reactnativecoaching

Run instructions for iOS:
    • cd /Users/sven/dev/efec/reactnativecoaching && npx react-native run-ios
    - or -
    • Open reactnativecoaching/ios/reactnativecoaching.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd /Users/sven/dev/efec/reactnativecoaching && npx react-native run-android


### Tasks
* Project Struktur (Typescript / iOS / Android)
* Project launch
* Hot reload
* package.json
* tsconfig.json
* app.json

## Step 02 Moving to expo

* clear the directory 
* expo init
* Why expo?
```
expo init 
```
Bare Workflow
Blank typescript


## Step 03 Basic-Components

* View, Text, 
* Style
* Button, onPress, Touchable Opacity, 
* Components vs. Functional Components
* Custom Component Tile (Title, Colors)

## Step 04 Complex Components
* Flexbox
* FlatList
* Modal

## Step 05 Forms
* Forms
* TextInput
* Switch
* DatePicker 
* Other Components https://facebook.github.io/react-native/docs/components-and-apis

## Step 06 React Navigation
* StackNavigator
* TabNavigator
* DrawerNavigator
* NativeScreen




# Day 2

* Recap Day 1

## Step 07 Hooks & Fetch Data from API
* Rules of Hooks https://reactjs.org/docs/hooks-overview.html#rules-of-hooks
* useState
* useEffect
* custom Hooks
* Other Hooks

### Links
https://medium.com/trabe/react-useref-hook-b6c9d39e2022

## Step 08 Application Context

* Create
* Use

# Step 09 Redux & Rematch
* Introduction Redux
* https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos


* Rematch 

# Step 10 Device Components

* Camera
* Barcode
* Alert API
* Geolocation



# Step 11 GraphQL Client
* Sample: https://github.com/GraphCMS/graphcms-examples/tree/master/current/react-native-apollo-blog

# Step 09 
* IPA Creation
* 