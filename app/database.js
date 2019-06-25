// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey:"AIzaSyC96kzqqIwB4iZ2jEsaPAgf7SIgISb1qF4",
    authDomain: "toiletfinderdb18.firebaseapp.com",
    databaseURL:"https://toiletfinderdb18.firebaseio.com",
    projectId: "toiletfinderdb18",
    storageBucket: "toiletfinderdb18.appspot.com",
    messagingSenderId: "39297120693",
    appID: "1:39297120693:android:30f4f7dedc180afe",
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

readUserData() {
    database.ref('toiletfinderdb18/').once('value', function (snapshot) {
        console.log(snapshot.val())
    });
}