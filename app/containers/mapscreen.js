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

export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [],
      coordinates: [],
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      mapMargin: 1
    };
    this.setMargin = this.setMargin.bind(this);
    this.readCoordsData = this.readCoordsData.bind(this);
  }

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
      .ref("/coordinates")
      .once("value", snapshot => {
        const fbObject = snapshot.val();
        const coordinate = Object.keys(fbObject).map(key => {
          fbObject[key].id = key;
          return fbObject[key];
        });
        this.setState({ coordinates: coordinate });
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
          // initialRegion={this.state.region}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true} //iOS ONLY
          onMapReady={this.setMargin}
        >
          {this.state.coordinates.map(coordinate => {
            return (
              <Marker
                coordinate={{
                  latitude: coordinate.lat,
                  longitude: coordinate.lng
                }}
                title={coordinate.name}
                image={require("../../assets/images/toiletMarker.png")}
                key={coordinate.id}
              />
            );
          })}
        </MapView>
      </Container>
    );
  }
}

MapScreen.propTypes = {
  provider: MapView.ProviderPropType
};

  /* <MapViewDirections
						origin={{ latitude: 1.279597, longitude: 103.835886 }} // Daily Limit: 1
						destination={{
							latitude: 1.37624319753702,
							longitude: 103.75640094280243
						}}
						apikey={MAPS_API_KEY}
						mode="WALKING"
					/> */
