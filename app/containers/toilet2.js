import React, { Component } from "react";
import {
  Container,
  Content,
  CardItem,
  Text,
  Card
} from "native-base";
import { View, StyleSheet, StatusBar, Button } from "react-native";
import MyHeader from "../components/myheader";
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#4f6d7a",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomView: {
    height: 50,
    width: "100%",
    position: "absolute",
    bottom: 0
  }
});

class Toilet2 extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Toilet",
    headerRight: <View />
  };

  render() {
    const { navigation } = this.props;
    const toiletName = navigation.getParam("toiletName", "did not go through");
    const toiletAddress = navigation.getParam(
      "toiletAddress",
      "did not go through"
    );
    const from = navigation.getParam("from", "did not go through");
    const to = navigation.getParam("to", "did not go through");
    return (
      <Container>
        <MyHeader />
        <View style={styles.wrapper}>
          <StatusBar backgroundColor="#4f6d7a" />
        </View>
        <Content padder>
          <Card>
            <CardItem bordered>
              <Text>You've selected...</Text>
            </CardItem>
            <CardItem header bordered>
              <Text>{toiletName}</Text>
            </CardItem>
            <CardItem footer bordered>
              <Text>{toiletAddress}</Text>
            </CardItem>
          </Card>
        </Content>
        <View style={styles.bottomView}>
          <Button
            color="#4f6d7a"
            onPress={() =>
              this.props.navigation.navigate("Navigate", {
                from2: from,
                to2: to
              })
            }
            title="Navigate there!"
          />
        </View>
      </Container>
    );
  }
}

export default withNavigation(Toilet2);
