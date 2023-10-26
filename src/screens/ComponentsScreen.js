import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    const myName = 'Travis'

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native </Text>
            <Text style={styles.subHeaderStyle}>My name is {myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen