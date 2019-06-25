import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Container } from "native-base";
import SplashScreen from 'react-native-splash-screen';
import MyHeader from "./components/myheader";
import DropCode from "./components/dropcode";

export default class App extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
            <Container>
                <MyHeader />
                <View style={styles.wrapper}>
                    <StatusBar backgroundColor="#4f6d7a" />
                </View>
                <DropCode />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#4f6d7a',
        justifyContent: 'center',
        alignItems: 'center',
    }
})