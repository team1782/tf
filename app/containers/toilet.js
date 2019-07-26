import React, { Component } from "react";
import { Container, Content, CardItem, Text, Card } from "native-base";
import { View, StyleSheet, StatusBar, Button } from "react-native";
import MyHeader from "../components/myheader";
import { withNavigation } from "react-navigation";
import StarRating from "react-native-star-rating";
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
  button: {
    height: 20,
    width: "100%",
    position: "absolute",
    bottom: 70
  }
});

class Toilet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3,
      starCountForUser: 0,
      userAssessed: false,
      id: 0,
      ratingRetrieved: false,
      numberOfReviews: 1
    };
  }

  static navigationOptions = {
    title: "Toilet",
    headerRight: <View />
  };

  UserAssess(key, rating) {
    if (!this.state.userAssessed) {
      this.setState({ id: key });
      this.state.userAssessed = true;
      const newNum = this.state.numberOfReviews + 1;
      const newRating = (this.state.starCount + rating) / newNum;
      this.writeUserData(key, newRating, newNum);
      this.setState({ starCount: newRating });
    } else {
      alert("You have already reviewed this toilet! Thank you!");
    }
  }

  writeUserData(key, star, num) {
    firebase
      .database()
      .ref("stars/" + String(key))
      .set({
        num,
        star
      })
      .then(data => {
        //success callback
        console.log("data ", data);
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });
  }

  getUserRating(key) {
    if (!this.state.ratingRetrieved) {
      this.state.ratingRetrieved = true;
      firebase
        .database()
        .ref("stars/" + String(key))
        .once("value", snapshot => {
          const state = snapshot.val();
          this.setState({ starCount: state.star });
          this.setState({ numberOfReviews: state.num });
        });
      console.log("DATA RETRIEVED");
    }
  }

  render() {
    const { navigation } = this.props;
    const toiletName = navigation.getParam("toiletName", "did not go through");
    const toiletAddress = navigation.getParam(
      "toiletAddress",
      "did not go through"
    );
    const from = navigation.getParam("from", "did not go through");
    const to = navigation.getParam("to", "did not go through");
    const id = navigation.getParam("id", "did not go through");
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
            <CardItem bordered>
              <Text>Current Review of the Toilet's Quality</Text>
            </CardItem>
            <CardItem>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={this.state.starCount}
                fullStarColor="#4f6d7a"
              />
            </CardItem>
            <CardItem bordered>
              <Text>Give your review after visiting the toilet!</Text>
            </CardItem>
            <CardItem bordered>
              <StarRating
                disabled={false}
                maxStars={5}
                starSize={30}
                rating={this.state.starCountForUser}
                selectedStar={rating => this.UserAssess(id, rating)}
              />
            </CardItem>
          </Card>
        </Content>
        <View style={styles.button}>
          <Button
            color="#4f6d7a"
            onPress={() =>
              this.props.navigation.navigate("Review", {
                key: id
              })
            }
            title="Reviews"
          />
        </View>
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
        {this.getUserRating(id)}
      </Container>
    );
  }
}

export default withNavigation(Toilet);
