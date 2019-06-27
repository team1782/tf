import React, { Component } from 'react';
import { Header, Body, Title, Subtitle } from 'native-base';
import { StyleSheet,  } from 'react-native';

export default class HeaderTitleSubtitleExample extends Component {
  render() {
    return (
        <Header style={styles.head}>
          <Body style={styles.navBar}>
            <Title>ToiletFinder</Title>
            <Subtitle>Where's the nearest toilet?</Subtitle>
          </Body>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: "#4f6d7a"
  },
  navBar: {
    backgroundColor: "#4f6d7a",
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    margin: 0
  }
})