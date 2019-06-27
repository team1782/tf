import React, { Component } from "react";
import "firebase/database";
import * as firebase from "firebase/app";
import SearchableDropdown from 'react-native-searchable-dropdown';
import Geocoder from "react-native-geocoding";



var firebaseConfig = {
  apiKey: "HIDDEN",
  authDomain: "toiletfinderdb18.firebaseapp.com",
  databaseURL: "https://toiletfinderdb18.firebaseio.com",
  projectId: "toiletfinderdb18",
  storageBucket: "toiletfinderdb18.appspot.com",
  messagingSenderId: "39297120693",
  appId: "1:39297120693:web:09303d58aa5f8a30"
};

firebase.initializeApp(firebaseConfig);

export default class DropCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [],
    };
  }

  componentDidMount() {
    this.readAddressData();
  }

  readAddressData = () => {
    firebase
      .database()
      .ref("/addressonly")
      .once("value", snapshot => {
        const fbObject = snapshot.val();
        const address = Object.keys(fbObject).map(key => {
          fbObject[key].id = key;
          return fbObject[key];
        });
        this.setState({ addresses : address });
      });
  };

  render() {
    return (
      <SearchableDropdown
      onItemSelect={item => alert("You've selected " + JSON.stringify(item.name))}
      containerStyle={{ padding: 5 }}
      textInputStyle={{
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      }}
      itemStyle={{
        padding: 10,
        marginTop: 2,
        backgroundColor: '#ddd',
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 5,
      }}
      itemTextStyle={{ color: '#222' }}
      itemsContainerStyle={{ maxHeight: 140 }}
      items={this.state.addresses}
      defaultIndex={2}
      placeholder="Toilet's Address"
      resetValue={false}
      underlineColorAndroid="transparent"
    />
    );
  }
}

