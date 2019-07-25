# Developer Guide

* [Setting Up](#setting-up)
  * [Prerequisites](#prerequisites)
  * [Setting up the project in your computer](#setting-up-the-project-in-your-computer)
* [Design](#design)
  * [Use Cases](#use-cases)
  * [Architecture](#architecture)
  * [General Starting Flow](#general-starting-flow)
  * [HomeScreen Container](#homescreen-container)
  * [MapScreen Container](#mapscreen-container)
* [Implementation](#implementation)
  * [Searchable Dropdown Menus](#searchable-dropdown-menus)
  * [Webscraping](#webscraping-using-beautifulsoup)
  * [Conversion to Coordinates](#conversion-of-string-addresses-to-coordinates)
* [Documentation](#documentation)
  * [Creation of Documentation](#creating-documentation)
  * [Editing of Documentation](#editing-of-documentation)

## Setting Up  
### Prerequisites  
* JDK 8 or later
* Android Studio
* Node 8.3 or later
* Python3
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

### Use Cases

*System:* Phone
*Actor:* User
*Use case:* **UC01** find nearest toilet
*Preconditions:* All hardware in working order.
*MSS:*
1. User launches App.
2. System prompts user for location details.
3. User selects either “Manually Key in Location (UC02)” or “Your Location (UC03)”.
4. System processes location and displays nearest toilets in the vicinity of user within 100m.
5. User selects the desired toilet to visit. 
6. System displays estimated distance to the toilet, as well as a navigation route to it.
7. System prompts user if user wants to “activate AR-Guided Navigation (UC04)”.
8. User selects desired choice and follows navigation to the toilet.
9. System prompts user to “Write a Review (UC05)”.
10. User submits review.  
Use case ends.  
Extensions:  
1a. System prompts user to switch on Location Services in the Settings, if it is not yet done so.  
4a. System is unable to compute toilets within 100m radius of user  
4a1. System indicates the error on the screen and requests for user to try again in another location.  
Use case ends.  

*System:* Phone
*Actor:* User
*Use case:* **UC02** Manually Key in Location
*Preconditions:* All hardware in working order.
*MSS:* 
1. User keys in their current location
2. System processes location and displays nearest toilets in the vicinity of user within 100m.
Use case ends.  
Extensions:  
1a. System detects an error in the location keyed in.  
1a1. System indicates the error on the screen and prompts user to enter a valid location.  
Use case ends.  

*System:* Phone
*Actor:* User
*Use case:* **UC03** Your Location
*Preconditions:* All hardware in working order.
*MSS:*
1. User selects “Your Location” on screen.  
2. System uses GPS technology to pinpoint user’s location.  
Use case ends.  
Extension:  
1a. System detects an that the user has turned off location services on his/her phone.  
1a1. System indicates the error on the screen and prompts user to turn location services back on.  
Use case ends.  

*System:* Phone
*Actor:* User
*Use case:* **UC04** Activate AR-Guided Navigation 
*Preconditions:* All hardware in working order.
*MSS:* 
1. User selects ‘yes’ on prompt to activate AR-Guided navigation service.  
2. System starts AR-Guided navigation service based on the location.  
Use case ends.  
Extensions:  
1a. System detects an that the user has turned off location services on his/her phone.  
1a1. System indicates the error on the screen and prompts user to turn location services back on.  
Use case ends.  

*System:* Phone
*Actor:* User
*Use case:* **UC05** Write a Review
*Preconditions:* All hardware in working order.
*MSS:*
1. System prompts user to type review.
2. User types a review and gives a rating of the toilet’s cleanliness.
3. User submits review.
4. System publishes user’s review on the toilet.
Use case ends.  
Extensions:  
1a. User declines to provide review.  
3a. User submits an empty review.  
3a1. System warns user not to submit empty review and returns to review box.  
Use case ends.  

### Architecture

App.js has only one class called App. It is responsible for,  
* At app launch: Initializes the components in the correct sequence, and connects them up with each other.
* At shut down: Shuts down the components and invokes cleanup method where necessary.

#### General Starting Flow

`App.js -> Setup.js -> app.js -> homescreen.js` 

#### HomeScreen Container

The container consists of 2 searchable dropdown menus which are part of react-native-searchable-dropdown and a button from react-native.

* The HomeScreen allows users to:
 * Select a toilet's location from the database.
 * Utilises `react-navigation` to navigate to the MapScreen that displays the toilet's data.

#### MapScreen Container

The container consists of a global map part of react-native-maps, as well as a database of the toilets' location from Google's Firebase: Realtime Database.

* The MapScreen allows users to:
 * View the location of all registered toilets on the database on the global map.

## Implementation

### Searchable DropDown Menu
* Toilet's Address & Toilet's Place

We made use of react-native-searchable-dropdown module to implement the search boxes for toilet's place and toilet's address by passing in an array of data.

The array of data is built by retrieving data from Google's Firebase: Realtime Database.

### WebScraping using BeautifulSoup

We used a Python package module called BeautifulSoup to parse HTML documents where we then extract data out of it.  
The URL of the website is: https://www.toilet.org.sg/loomapdirectory  
We extracted 272 entries of toilet data with each entry containing information such as the toilet's name, address and place.  
* E.g. AMK Bus Interchange, 53 Ang Mo Kio Avenue 3 S(569933), Bus Interchange

### Conversion of String Addresses to Coordinates

We made use of react-native-geocoding and Google's Geocoding API to convert our string address to coordinates which are then used in MapScreen.js to display the toilet markers on the global map.

## Documentation
We use Markdown as it is easy to read and write, and it is known to be the easiest way to write rich format documents without ever touching code or toolbars. The syntax is so straightforward that it can be understood and learnt by virtually anyone.

### Creating Documentation
A `.md` file can be easily created on GitHub, in any repo by ending the name of the file with `.md`. 
Thereafter, you can simply pull into your `local` from github.

### Editing of Documentation
Similarly, markdown documents can be edited through GitHub as well by clicking on the "pen" icon on the top right corner of your repository.  
