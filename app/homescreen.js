import React, { Component } from "react";
import { Container } from "native-base";
import { View, StyleSheet, StatusBar, Button } from "react-native";
import MyHeader from "./components/myheader";
import DropCode from "./components/dropcode";
import DropCode2 from "./components/dropcode2";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <MyHeader />
        <View style={styles.wrapper}>
          <StatusBar backgroundColor="#4f6d7a" />
        </View>
        <DropCode />
        <DropCode2 />
        <View style={styles.bottomView}> 
          <Button
            color="#4f6d7a"
            onPress={() => this.props.navigation.navigate("Map")}
            title="Go to Maps"
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#4f6d7a",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomView: {
    height: 50,
    width: '100%',
    position: 'absolute',
    bottom: 0
  }
});
