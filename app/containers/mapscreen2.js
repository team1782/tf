import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  PermissionsAndroid
} from "react-native";
import { Container } from "native-base";
import MyHeader from "../components/myheader";
import "firebase/database";
import * as firebase from "firebase/app";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const MAPS_API_KEY = "HIDDEN";
const ASPECT_RATIO = width / height;
const LATITUDE = 1.297136;
const LONGITUDE = 103.777527;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#4f6d7a",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class MapScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toilets: [],
      mapMargin: 1,
    };
    this.setMargin = this.setMargin.bind(this);
    this.readCoordsData = this.readCoordsData.bind(this);
  }

  watchID: ?number = null;

  setMargin() {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    ).then(granted => {
      this.setState({ mapMargin: 0 });
    });
  }

  readCoordsData = () => {
    firebase
      .database()
      .ref("/toilets")
      .once("value", snapshot => {
        const fbObject = snapshot.val();
        const toilet = Object.keys(fbObject).map(key => {
          fbObject[key].id = key;
          return fbObject[key];
        });
        this.setState({ toilets: toilet });
      });
  };

  componentDidMount() {
    this.readCoordsData();
  }

  componentDidUpdate() {
    this.map.fitToElements(true);
  }

  static navigationOptions = {
    title: "Map",
    headerRight: <View />
  };

  render() {
    const { navigation } = this.props;
    const inputLocation = navigation.getParam('inputLocation', "did not go through");
    return (
      <Container>
        <MyHeader />
        <View style={styles.wrapper}>
          <StatusBar backgroundColor="#4f6d7a" />
        </View>
        <MapView
          ref={ref => {
            this.map = ref;
          }}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1, marginBottom: this.state.mapMargin }}
          region={inputLocation}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true} //iOS ONLY
          onMapReady={this.setMargin}
        >
          <MapView.Marker
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={inputLocation}
          />
          {this.state.toilets.map(toilet => {
            return (
              <Marker
                coordinate={{
                  latitude: toilet.lat,
                  longitude: toilet.lng
                }}
                title={toilet.name}
                image={require("../../assets/images/toiletMarker.png")}
                key={toilet.id}
              />
            );
          })}
        </MapView>
      </Container>
    );
  }
}

MapScreen2.propTypes = {
  provider: MapView.ProviderPropType
};
