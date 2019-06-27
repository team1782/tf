import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./containers/homescreen";
import MapScreen from "./containers/mapscreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    //Map: MapScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#4f6d7a"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        }
      }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <AppContainer />;
  }
}
