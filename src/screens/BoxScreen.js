import React from "react";
import { Text, View, StyleSheet } from "react-native"

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}></View>
            <View style={styles.textTwoStyle}></View>
            <View style={styles.textThreeStyle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    textOneStyle: {
        height: 50,
        width: 50,
        borderWidth: 3,
        backgroundColor: 'red',

    },
    textTwoStyle: {
        height: 50,
        width: 50,
        borderWidth: 3,
        backgroundColor: 'green',
        top: 50,
    },
    textThreeStyle: {
        height: 50,
        width: 50,
        borderWidth: 3,
        backgroundColor: 'purple'
    },
})

export default BoxScreen