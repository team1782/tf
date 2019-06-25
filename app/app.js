import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Container } from "native-base";
import SplashScreen from 'react-native-splash-screen';
import MyHeader from "./components/myheader"

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
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#4f6d7a',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
