import React, { Component } from "react";
import { Container, Content, CardItem, Text, Button, Icon, Card } from "native-base";
import { View, StyleSheet, StatusBar } from "react-native";
import MyHeader from "../components/myheader";
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#4f6d7a",
    justifyContent: "center",
    alignItems: "center"
  }
});

class Toilet extends Component {
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
        <Button backgroundColor="#4f6d7a" large onPress={() => this.props.navigation.navigate("Navigate", {
            from2: from,
            to2: to
        })} >
            <Text>Navigate there!</Text>
        </Button>
      </Container>
    );
  }
}

export default withNavigation(Toilet);
