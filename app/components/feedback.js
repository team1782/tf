import React, { Component } from "react";
import { Button } from "react-native";
import { Content } from "native-base";
import { withNavigation } from "react-navigation";

class Feedback extends Component {
  render() {
    return (
      <Content>
        <Button
          color="#4f6d7a"
          onPress={() => this.props.navigation.navigate("Feedback")}
          title="  Feedback  "
        />
      </Content>
    );
  }
}

export default withNavigation(Feedback);
