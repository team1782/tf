# ToiletFinder

ToiletFinder is an application designed to help users locate the nearest toilets around them.

* Employs the use of google maps, AR, web-scraping through Python's BeautifulSoup and ReactNative.

## Site Map
* [Motivation](#motivation)

* [Aim](#aim)

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

