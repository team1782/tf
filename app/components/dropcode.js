import * as firebase from "firebase/app";
import React, { Component } from "react";
import { Container, Content, Icon, Picker, Form, Button } from "native-base";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBxyaS4-BSWBgsUdV32jytZM21bAI_MOeY",
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
      selected: undefined,
      toilets : []
    };
    this.readUserData();
  }

  readUserData = () => {
    firebase.database().ref("/toilets").once("value", snapshot => {
      const fbObject = snapshot.val();
      const toilet = Object.keys(fbObject).map(key => {
        fbObject[key].id = key;
        return fbObject[key];
      });
      this.setState({ toilets : toilet });
      console.log(this.state.toilets);
    });
  };
  
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Container style={{
        padding: 12
      }}>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              {this.state.toilets.map(toilet => {
						return (
							<Picker.Item label={toilet.Address} value={toilet.Name}
							/>
						);
					})}
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}