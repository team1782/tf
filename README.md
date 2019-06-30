# ToiletFinder

ToiletFinder is an application designed to help users locate the nearest toilets around them.

* Employs the use of google maps, AR, web-scraping through Python's BeautifulSoup and ReactNative.

## Site Map
* [Motivation](#motivation)

* [Aim](#aim)

* [User Stories](#user-stories)

* [Use Cases](#use-cases)

* [Scope of Project](#scope-of-project)

* [Comparison to Existing/Related Apps](#how-are-we-different-from-similar-platforms)

* [Web-scraping related Python codes and CSV/JSON files](https://github.com/shaunnmui97/toiletfinderRNcode/tree/master/Web%20Scraping)

* [User Guide](https://github.com/hazletnj/tf/blob/master/docs/userguide.md)

* [Developer Guide](https://github.com/hazletnj/tf/blob/master/docs/developerguide.md)


## Motivation

When you’re stuck in a situation where you really need to go but no toilets are in sight, what do you do?

At times in shopping malls, due to the poor placements of the signs to the toilets, many shoppers end up wasting time finding for a toilet especially when they are already in urgent need of using one. 

## Aim

We hope to create a user-friendly app for individuals to find out the locations and directions to their nearest preferred restrooms.

## User Stories

As a user, I can input my current location based on GPS, so that I will be able to view the nearest toilets to me.

As a user helping my friend find a toilet, I can input my friend’s location in Singapore, so that i will be able to help him/her locate the nearest toilets to him/her.

As a user, I can view the nearest toilets to me, so that I can make a choice on which toilet to use base which is closest to me.

As a user who urgently needs to go to the toilet, I can navigate to the nearest one using my camera as a guide, so that time will not be wasted on walking in the wrong directions.

As a user who had been to the toilet, I can write a review of the toilet’s cleanliness so that other can make more informed choices.

As a user who is particularly concerned with hygiene, I can browse through the reviews of the toilets’ cleanliness ratings.

As a returning user to the same toilet, I can edit and update my review of the toilet’s cleanliness so that others can make more informed choices.

As a careless user, I can delete the inaccurate/incorrect review of the toilet’s cleanliness so that other will not be misled.

As a user who has discovered a toilet that is not shown in the app, I can make a feedback to request adding the toilet’s location to the app, so that others will be able to see the toilet’s location.

As a user who has discovered that the toilet indicated on the app no longer exists, I can make a feedback to request for the deletion of the toilet’s location from the app, so that others will not choose that toilet anymore.

As an admin, I can create a new listing (toilet) in the app so that the information provided to users is updated.

As an admin, I can review the feedbacks sent by users so that the overall app experience can be improved.

As an admin, I can delete the reviews submitted by users if they make use of inappropriate language.

## Use Cases

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

## Scope of Project

The ToiletFinder app is GPS-based and seeks to locate nearby toilets for users using their location. It provides the following information:
1. Distance to and Estimated Time of Arrival to each toilet (represented by markers on the map)
2. Cleanliness Rating of the Toilet by other Users (Users will be prompted to give a review upon visiting the toilet)

### Features to be completed by Mid of July
* Implementation of Normal and AR-guided Navigation
* Cleanliness Rating and Review

#### Frameworks:
* Database (Google Firebase - Realtime Database)
* Maps (React Native Maps, Google's Directions API)
* Geocoding (Google's Geocoding API)
* ReactNative- (Base, Navigation, Directions, Maps, Geocoding)
* Web Scraping (BeautifulSoup)

## How are we different from similar platforms?
As of now, applications available for download in the AppStore/PlayStore are developed by overseas companies (mainly UK). This meant that the toilet finder apps are not localised to Singapore’s context - ignoring toilets in coffee shops, train stations. These applications are also missing a key feature - Ratings on the cleanliness of the toilet.

