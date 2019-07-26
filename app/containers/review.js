import React, { Component } from "react";
import { Container } from "native-base";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import MyHeader from "../components/myheader";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const key = navigation.getParam("key", "did not go through");
    return (
      <Container>
        <MyHeader />
        <View style={styles.wrapper}>
          <StatusBar backgroundColor="#4f6d7a" />
        </View>
        <View>
          <Text>This toilet's key is: {key}</Text>
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
  }
});
