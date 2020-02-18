# React Native Coaching

This is the React Native Coaching support project. 

## Pre-requisits
* Basic Typescript knowledge
* Local administrative rights
* Visual Studio Code
* nodejs & npm 12.16.0 LTS (https://nodejs.org/en/)
* xcode latest 
* iOS Simulator
* expo cli (https://docs.expo.io/versions/latest/get-started/installation/)


# Day 1

## Step 00 Introduction to React Native

* What is React Native
* Single Thread
* Libraries (link)
* React Native for Web, VR, Windows, Mac, ...

No project is used in this step

## Step 01 Create a core react native project

Create a core react native projet as reference and explain the containing parts:
* Project structure (Typescript / iOS / Android)
* Project launch
* Hot Reload
* package.json
* tsconfig.json
* app.json

```
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
```
This project will presented by the coach

## Step 02 Moving to expo

* clear the directory 
* expo init
* Why expo?

Create the expo project
```
expo init PROJECTNAME 

select Blank typescript project
```

## Step 03 Basic-Components

Add React native components, learn the difference between components and functional components and create your own first components

* View, Text, 
* Style
* Button, onPress, Touchable Opacity
* Component State
* Components vs. Functional Components
* Custom Component Tile (Title, Colors)

## Step 04 Complex Components

Use the following components
* Flexbox
* FlatList
* Modal

## Step 05 Forms
Learn how to create the first form
* Forms
* TextInput
* Switch
* DatePicker as non-core component
* Other Components https://facebook.github.io/react-native/docs/components-and-apis

Tasks:
__Create a login form component__

## Step 06 React Navigation

```
expo init PROJECTNAME 

select tabs project 
```
Task: Review Code in step06-Expo-tabs-react-navigation

Launch Project from step06-step06-ReactNavigation, this is a copy of the official react navigation project


Task: Review Code in step06-step06-YourOwnNavigator
* StackNavigator
* TabNavigator
* DrawerNavigator

Hint: This Project uses rematch to show some fundamentals on app state based roouting

# Day 2

* Recap Day 1

## Step 07 Hooks & Fetch Data from API
Add state to functional components

* Rules of Hooks https://reactjs.org/docs/hooks-overview.html#rules-of-hooks
* useState
* useEffect
* useCallback
* useRef
* useMemo
* Custom Hooks

### Links
https://medium.com/trabe/react-useref-hook-b6c9d39e2022

## Step 08 Application Context

Keep an global app state
* Context vs. passing the prop down as prop param
* Create a context
* Use the contect in components

# Step 09 Redux & Rematch

## Redux basics
* Introduction Redux based in a react app
* Actions
* Reducers
* Redux Saga / Redux Thunk
* https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos

## Rematch as Redux addon
* Rematch  
* Provide & Store
* Model
* Persistency


# Step 10 Device Components

* Camera
* Barcode
* Alert API
* Geolocation



# Step 11 GraphQL Client
* Sample: https://github.com/GraphCMS/graphcms-examples/tree/master/current/react-native-apollo-blog

# Step 12
* IPA Creation
* 


## Step 13



# Links
* React Native
* Expo
* Can it be done in React Native
* Brownfield Projects


