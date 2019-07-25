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

