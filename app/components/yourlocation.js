import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import { Container } from "native-base";
import { withNavigation} from 'react-navigation';

class YourLocation extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container>
        <View style={styles.bottomView}>
          <Button
            color="#4f6d7a"
            onPress={() => this.props.navigation.navigate("Map")}
            title="Your Location"
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  bottomView: {
    height: 50,
    width: "100%",
    position: "absolute",
    bottom: 0
  }
});

export default withNavigation(YourLocation);
