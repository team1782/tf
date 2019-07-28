# Developer Guide

* [Setting Up](#setting-up)
  * [Prerequisites](#prerequisites)
  * [Setting up the project in your computer](#setting-up-the-project-in-your-computer)
   * [Dependencies](#dependencies)
* [Design](#design)
  * [Use Cases](#use-cases)
  * [Architecture](#architecture)
  * [General Starting Flow](#general-starting-flow)
  * [HomeScreen Container](#homescreen-container)
  * [MapScreen Container](#mapscreen-container)
  * [NavigationScreen Container](#navigationscreen-container)
  * [ReviewScreen Container](#reviewscreen-container)
  * [FeedbackScreen Container](#feedbackscreen-container)
* [Implementation](#implementation)
  * [User's Location](#users-location)
   * [Manual Input of Address](#manual-input-of-address)
   * [GPS Location](#gps-location)
  * [Map](#map)
  * [Storage of Data](#storage-of-data)
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

#### Dependencies
* Fork this repo and clone the fork to your computer.
* Open a console in the folder of the cloned files.
* Run npm install.
 `"firebase": "^6.2.4"`

 `"native-base": "^2.12.1",`

 `"react": "16.8.3",`

 `"react-native": "^0.59.9",`

 `"react-native-config": "^0.11.7",`

 `"react-native-elements": "^1.1.0",`

 `"react-native-geocoding": "^0.3.0",`

 `"react-native-gesture-handler": "^1.3.0",`

 `"react-native-maps": "^0.24.2",`

 `"react-native-maps-directions": "^1.7.0",`

 `"react-native-splash-screen": "3.0.6",`

 `"react-native-star-rating": "^1.1.0",`

 `"react-native-vector-icons": "^6.6.0",`

 `"react-navigation": "^3.11.0"` 

* Run the following dependencies:
  * npm install react-native
  * npm install react-navigation
  * npm install native-base
  * npm install react-native-maps
  * npm install --save firebase
  * npm install react-native-config
  * npm install react-native-geocoding
  * npm install react-native-splash-screen
  * npm install react-native-vector-icons
  
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
 
#### NavigationScreen Container

This container is basically a MapScreen Container with an additional mapping route from the user's location to the desired toilet's location. 

* The NavigationScreen allows users to:
 * Navigate to the nearest toilet/ chosen toilet.
 
#### ReviewScreen Container

This container shows all existing reviews previously submitted by all users in a bordered window. There is also an option for users to submit their own review for the toilet chosen.

* The ReviewScreen allows users to:
 * Read other reviews.
 * Submit their own review.

#### FeedbackScreen Container

This container allows Users to submit feedback - be it constructive criticism or compliments to the developers. They have to fill in all 3 blanks - Name/ Email/ Feedback before a submission can be made.

* The FeedbackScreen allows users to:
 * Submit complaints/improvements/bugs to the developers.

## Implementation

### User's Location

#### Manual Input of Address

We made use of `TextInput` from react-native to implement the search boxes for user's address. Thereafter, we employed `Geocoding` using Google API to transform user's location to coordinates that can be reflected on the map.

#### GPS Location

We made use of `react-native-maps` and Google's `GPS` to obtain the user's location, thereafter parsing in the coordinates to our MapScreen container to reflect the user's location. 

### Map

We employed `react-native-maps` and `Maps SDK for Android` from Google for the implementation of Maps feature in our app.

### Storage of Data

All forms of data are stored in Firebase's Realtime Database:
 * Toilet Addresses - String Addresses
 * Toilet Addresses - Coordinates (Latitudes, Longitudes)
 * User-submitted Reviews - Typed-Reviews
 * User-submitted Reviews - Star-Reviews
 * Feedback

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
