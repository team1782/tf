import React, { Component } from "react";
import "firebase/database";
import * as firebase from "firebase/app";
import SearchableDropdown from 'react-native-searchable-dropdown';

export default class DropCode2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
    };
  }

  componentDidMount() {
    this.readNameData();
  }

  readNameData = () => {
    firebase
      .database()
      .ref("/nameonly")
      .once("value", snapshot => {
        const fbObject = snapshot.val();
        const name = Object.keys(fbObject).map(key => {
          fbObject[key].id = key;
          return fbObject[key];
        });
        this.setState({ names: name });
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
      items={this.state.names}
      defaultIndex={2}
      placeholder="Toilet's Place"
      resetValue={false}
      underlineColorAndroid="transparent"
    />
    );
  }
}