import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default class HeaderTitleSubtitleExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#4f6d7a'}}>
        <Header style={{backgroundColor: '#4f6d7a'}}>
          <Left />
          <Body >
            <Title style={styles.title}>ToiletFinder</Title>
            <Subtitle style={styles.subtitle}>Where's the nearest toilet?</Subtitle>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#4f6d7a',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20
    },
    subtitle: {
        backgroundColor: '#4f6d7a',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 14
    }
})