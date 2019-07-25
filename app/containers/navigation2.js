import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Dimensions } from "react-native";
import { Container } from "native-base";
import MyHeader from "../components/myheader";
import "firebase/database";
import * as firebase from "firebase/app";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { withNavigation } from "react-navigation";
import Config from 'react-native-config';

const { width, height } = Dimensions.get("window");
const API_KEY = Config.API_KEY;
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

class Navigation2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toilets: [],
      initialPosition: {
        latitude: 1.3521,
        longitude: 103.8198,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markerPosition: {
        latitude: LATITUDE_DELTA,
        longitude: LONGITUDE_DELTA
      },
      mapMargin: 1,
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
          apikey={API_KEY}
          strokeWidth={3}
          mode="WALKING"
          strokeColor="blue"
        />
        </MapView>
      </Container>
    );
  }
}

Navigation2.propTypes = {
  provider: MapView.ProviderPropType
};

export default withNavigation(Navigation2);
