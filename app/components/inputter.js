import React, { Component } from "react";
import { View, TextInput, Button, Dimensions } from "react-native";
import { Container } from "native-base";
import { withNavigation } from "react-navigation";
import Geocoder from "react-native-geocoding";
import Config from 'react-native-config';

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GEOCODING_API_KEY = Config.API_KEY;

class Inputter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      userPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      }
    };
    this.renderConditionally = this.renderConditionally.bind(this);
  }

  renderConditionally() {
    if (this.state.address == "") {
      alert("You have not typed in your location!");
    } else {
      Geocoder.init(GEOCODING_API_KEY);
      Geocoder.from(this.state.address).then(json => {
      var location = json.results[0].geometry.location;
      var userP = {
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      };
      this.setState({ userPosition : userP }, () => (this.props.navigation.navigate("Map2", {
        inputLocation: this.state.userPosition})));
      });
    }
  }

  render() {
    return (
      <Container>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Input your address here"
            onChangeText={address => this.setState({ address })}
          />
        </View>
        <View>
          <Button
            color="#4f6d7a"
            onPress={this.renderConditionally}
            title="GO!"
          />
        </View>
      </Container>
    );
  }
}

export default withNavigation(Inputter);