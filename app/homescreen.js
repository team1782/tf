import React, { Component } from "react";
import { Container } from "native-base";
import { View, StyleSheet, StatusBar, Image } from "react-native";
import MyHeader from "./components/myheader";
import Inputter from "./components/inputter";
import YourLocation from "./components/yourlocation";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
          <MyHeader />
          <View style={styles.wrapper}>
            <StatusBar backgroundColor="#4f6d7a" />
          </View>
          <Inputter nav={navigation} />
          <View style={styles.image}>
          <Image
            source={require("../assets/images/icon.png")}
          />
          </View>
          <YourLocation nav={navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#4f6d7a",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    backgroundColor: "#4f6d7a",
    justifyContent: "center",
    alignItems: "center"
  }
});
