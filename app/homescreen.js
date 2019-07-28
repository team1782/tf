import React, { Component } from "react";
import { Container, Card, CardItem, Text, Content } from "native-base";
import { View, StyleSheet, StatusBar } from "react-native";
import MyHeader from "./components/myheader";
import Inputter from "./components/inputter";
import YourLocation from "./components/yourlocation";
import Feedback from "./components/feedback";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <MyHeader />
        <View style={styles.wrapper}>
          <StatusBar backgroundColor="#4f6d7a" />
        </View>
        <Content padder>
          <Card>
            <CardItem header bordered backgroundColor="#4f6d7a">
              <Text>Would you prefer keying in your address?</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{ flex: 1 }}>
              <Inputter nav={navigation} />
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Or by using the state-of-the-art GPS!</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <YourLocation nav={navigation} />
            </CardItem>
          </Card>
        </Content>
        <View style={{ bottom: 0, position: "absolute", width: "100%" }}>
          <Feedback />
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
