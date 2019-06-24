import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <StatusBar
                    backgroundColor="#4f6d7a"
                />
                <Text style={styles.title}>ToiletFinder</Text>
                <Text style={styles.subtitle}>Where's the nearest toilet?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#4f6d7a',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#F5FCFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
    }
});