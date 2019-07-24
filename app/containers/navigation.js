import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Dimensions } from "react-native";
import { Container } from "native-base";
import MyHeader from "../components/myheader";
import "firebase/database";
import * as firebase from "firebase/app";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { withNavigation } from "react-navigation";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#4f6d7a",
    justifyContent: "center",
    alignItems: "center"
  }
});

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toilets: [],
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
      mapMargin: 1,
      markerPressed: false,
      origin: {
        latitude: 0,
        longitude: 0
      },
      destination: {
        latitude: 0,
        longitude: 0
      }
    };
    this.readCoordsData = this.readCoordsData.bind(this);
  }

  watchID: ?number = null;

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
    navigator.geolocation.getCurrentPosition(
      position => {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        };
        this.setState({ initialPosition: initialRegion });
        this.setState({ markerPosition: initialRegion });
      },
      error => console.log(error),
      { timeout: 30000 }
    );

    this.watchID = navigator.geolocation.watchPosition(position => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);

      var lastRegion = {
        latitude: lat,
        longitude: long,
        longitudeDelta: LONGITUDE_DELTA,
        latitudeDelta: LATITUDE_DELTA
      };

      this.setState({ initialPosition: lastRegion });
      this.setState({ markerPosition: lastRegion });
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  componentWillUpdate() {
    this.map.fitToElements(true);
  }

  static navigationOptions = {
    title: "Map",
    headerRight: <View />
  };

  render() {
    const { navigation } = this.props;
    const from2 = navigation.getParam("from2", "did not go through");
    const to2 = navigation.getParam("to2", "did not go through");
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
          region={this.state.initialPosition}
          showsUserLocation={true}
          zoomEnabled={true}
          showsMyLocationButton={true}
          followsUserLocation={true} //iOS ONLY
          toolbarEnabled={true}
          loadingEnabled={true}
          loadingIndicatorColor={"#ffffff"}
          loadingBackgroundColor={"#4f6d7a"}
        >
          <MapView.Marker
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.markerPosition}
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
          <MapViewDirections
          origin={from2}
          destination={to2}
          apikey={"AIzaSyDBnrDdsjVd5yxDaRPzOgpRFjmGjM7jXD4"}
          strokeWidth={3}
          mode="WALKING"
          strokeColor="blue"
        />
        </MapView>
      </Container>
    );
  }
}

Navigation.propTypes = {
  provider: MapView.ProviderPropType
};

export default withNavigation(Navigation);
