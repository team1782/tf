import React, { Component } from "react";
import { Container, Content, CardItem, Text, Card } from "native-base";
import {
  View,
  StyleSheet,
  StatusBar,
  Button,
  TextInput,
  Alert
} from "react-native";
import MyHeader from "../components/myheader";
import { withNavigation } from "react-navigation";
import "firebase/database";
import * as firebase from "firebase/app";

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
  },
  bottomView: {
    height: 50,
    width: "100%",
    position: "absolute",
    bottom: 0
  }
});

class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      refreshing: false,
      name: "",
      email: ""
    };
  }

  static navigationOptions = {
    title: "Feedback",
    headerRight: <View />
  };

  renderConditionally() {
    if (this.state.feedback == "" || this.state.name == "" || this.state.email == "") {
      Alert.alert("Have you filled up all the blanks?", "Please try again!");
    } else {
      firebase
        .database()
        .ref("feedback/")
        .push({
          feedback: this.state.feedback,
          name: this.state.name,
          email: this.state.email
        })
        .then(() => {
          console.log("Inserted!");
        })
        .catch(error => {
          console.log(error);
        });
      this.setState({
        feedback: "",
        name: "",
        email: ""
      });
      Alert.alert("Every feedback is valuable!", "Thank you for your time!");
    }
  }

  render() {
    return (
      <Container>
        <View style={styles.wrapper}>
          <StatusBar backgroundColor="#4f6d7a" />
        </View>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Facing any bugs or issues?</Text>
            </CardItem>
          </Card>
          <Card>
            <View style={{ padding: 10 }}>
              <TextInput
                textAlignVertical="top"
                placeholder="What's your name?"
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              />
            </View>
          </Card>
          <Card>
            <View style={{ padding: 10 }}>
              <TextInput
                textAlignVertical="top"
                placeholder="What's your e-mail address?"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </View>
          </Card>
          <Card>
            <View style={{ padding: 60 }}>
              <TextInput
                textAlignVertical="top"
                multiline={true}
                placeholder="Write your feedback here!"
                onChangeText={feedback => this.setState({ feedback })}
                value={this.state.feedback}
              />
            </View>
          </Card>
        </Content>
        <View style={styles.bottomView}>
            <Button
              color="#4f6d7a"
              onPress={() => this.renderConditionally()}
              title="Submit!"
            />
          </View>
      </Container>
    );
  }
}

export default withNavigation(FeedbackScreen);
