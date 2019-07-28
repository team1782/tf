import React, { Component } from "react";
import { Button } from "react-native";
import { withNavigation } from "react-navigation";
import { Content } from "native-base";

class YourLocation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content>
        <Button
          color="#4f6d7a"
          onPress={() => this.props.navigation.navigate("Map")}
          title="Your Location"
        />
      </Content>
    );
  }
}

export default withNavigation(YourLocation);
