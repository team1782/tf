# Developer Guide

* [Setting Up](#setting-up)
  * [Prerequisites](#prerequisites)
  * [Setting up the project in your computer](#setting-up-the-project-in-your-computer)
* [Design](#design)
* [Implementation](#implementation)
* [Documentation](#documentation)
* [Testing](#testing)

## Setting Up  
### Prerequisites  
* JDK 8 or later
* Android Studio
* Node 8.3 or later
* Python2
* An IDE (e.g. Visual Studio Code)
### Setting Up the Project in your Computer
* Fork this repo and clone the fork to your computer.
* Open a console in the folder of the cloned files.
* Run npm install.
* Run the following dependencies:
  * npm install react-native
  * npm install react-navigation
  * npm install native-base
  * npm install react-native-maps
  * npm install --save firebase
  * react-native-searchable-dropdown
* After running each dependency after npm install react-native, link each dependency to react-native using the keyword **link**.
* An example would be `react-native link react-navigation` or `react-native link firebase`
* Open Android Studio and Run the Emulator.
* Run the command `react-native run-android` in the console to link the emulator to the IDE. It should finish with the `BUILD SUCCESSFUL` message. This will generate all resources required by the application.

## Design

## Implementation

## Documentation
We use Markdown as it is easy to read and write, and it is known to be the easiest way to write rich format documents without ever touching code or toolbars. The syntax is so straightforward that it can be understood and learnt by virtually anyone.

### Creating Documentation
A .md file can be easily created on GitHub, in any repo by ending the name of the file with ".md". 
Thereafter, you can simply pull into your `local` from github.

### Editing of Documentation
Similarly, markdown documents can be edited through GitHub as well by clicking on the "pen" icon on the top right corner of your repository.  

## Testing
