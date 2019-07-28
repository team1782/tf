import React, { Component } from "react";
import { Container, Content, CardItem, Text, Card } from "native-base";
import { View, StyleSheet, StatusBar, Button, Alert } from "react-native";
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
      starCount: 0,
      starCountForUser: 0,
      userAssessed: false,
      id: 0,
      ratingRetrieved: false,
      numberOfReviews: 1,
      total: 0
    };
  }

  static navigationOptions = {
    title: "Toilet",
    headerRight: <View />
  };

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", "did not go through");

    this.setState({ id: id });
    this.getUserRating(id);
  }

  UserAssess(key, rating) {
    if (!this.state.userAssessed) {
      this.state.userAssessed = true;
      const newNum = this.state.numberOfReviews + 1;
      const newTotal = this.state.total + rating;
      const newRating = newTotal / newNum;
      this.writeUserData(key, newRating, newNum, newTotal);
      this.setState({ starCount: newRating });
    } else {
      alert(
        "Have a Nice Day!",
        "You have already reviewed this toilet! Thank you!"
      );
    }
  }

  writeUserData(key, star, num, total) {
    firebase
      .database()
      .ref("stars/" + String(key))
      .set({
        num,
        star,
        total
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
    firebase
      .database()
      .ref("stars/" + String(key))
      .once("value", snapshot => {
        const state = snapshot.val();
        this.setState({ total: state.total });
        this.setState({ numberOfReviews: state.num });
        this.setState({ starCount: state.star });
      });
    console.log("DATA RETRIEVED");
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
      </Container>
    );
  }
}

export default withNavigation(Toilet);
