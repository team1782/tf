import React, { Component } from "react";
import { Container, Header, Content, Textarea, Form, Card } from "native-base";
import {
  View,
  StyleSheet,
  StatusBar,
  Alert,
  FlatList,
  Button
} from "react-native";
import { List, ListItem } from "react-native-elements";
import MyHeader from "../components/myheader";

import "firebase/database";
import * as firebase from "firebase/app";
import { TextInput } from "react-native-gesture-handler";
import { stringLiteral } from "@babel/types";

export default class ReviewScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      message: "",
      review: "",
      refreshing: false,
      comments: []
    };

    this.writeCommentsData = this.writeCommentsData.bind(this);
    this.readCommentsData = this.readCommentsData.bind(this);
    this.setCommentState = this.setCommentState.bind(this);
  }

  static navigationOptions = {
    title: "Reviews",
    headerRight: <View />
  };

  handleRefresh() {
    console.log("test");
    this.setState({ refreshing: false });
  }

  handleSubmit(id) {
    this.writeCommentsData(id, this.state.message);
    Alert.alert("Have a Nice Day!", "Submitted!");
  }

  readCommentsData = keyA => {
    var ref = firebase.database().ref("keys/" + String(keyA));
    ref.on("value", function(snapshot) {
      if (snapshot.exists()) {
        firebase
          .database()
          .ref("comments/" + String(keyA))
          .on("value", snapshot => {
            const fbObject = snapshot.val();
            Object.keys(fbObject).forEach(key => {
              placeholder.push(fbObject[key]), (fbObject[key].id = key);
            });
          });
      }
    });
    return placeholder;
  };

  setCommentState(comment) {
    this.setState({
      comments: comment
    });
  }

  readCommentsData = keyA => {
    const self = this;
    var ref = firebase.database().ref("keys/" + String(keyA));
    ref.on("value", function(snapshot) {
      if (snapshot.exists()) {
        firebase
          .database()
          .ref("comments/" + String(keyA))
          .on("value", snapshot => {
            const fbObject = snapshot.val();
            const comment = Object.keys(fbObject).map(key => {
              fbObject[key].id = key;
              return fbObject[key];
            });
            self.setCommentState(comment);
          });
      }
    });
    return this.state.comments;
  };

  writeCommentsData(key, review) {
    if (this.state.comment == "") {
      Alert.alert("Have a Nice Day!", "You cannot give a blank review!");
    } else {
      firebase
        .database()
        .ref("comments/" + String(key))
        .push({
          comment: review
        })
        .then(() => {
          console.log("Inserted !");
          this.handleRefresh();
        })
        .catch(error => {
          console.log(error);
        });

      firebase
        .database()
        .ref("keys/" + String(key))
        .set({
          comment: "1"
        });

      this.setState({
        message: ""
      });
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const key = navigation.getParam("key", "did not go through");
    this.readCommentsData(key);
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
      />
    );
  };

  render() {
    const { navigation } = this.props;
    const key = navigation.getParam("key", "did not go through");
    return (
      <Container>
        <View style={styles.wrapper}>
          <StatusBar backgroundColor="#4f6d7a" />
        </View>

        <Content padder>
          <Card>
            <View>
              <FlatList
                ItemSeparatorComponent={this.FlatListItemSeparator}
                data={this.state.comments}
                inverted={true}
                extraData={this.state.comments}
                refreshing={this.state.refreshing}
                renderItem={({ item }) => <ListItem title={item.comment} />}
                keyExtractor={item => item.id}
              />
            </View>
          </Card>
        </Content>

        <View>
          <TextInput
            style={{ height: 40 }}
            placeholder="Enter a review!"
            onChangeText={message => {
              this.setState({ message });
            }}
            value={this.state.message}
          />
        </View>
        <View>
          <Button
            color="#4f6d7a"
            onPress={() => this.handleSubmit(key)}
            title="Submit!"
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
  }
});
