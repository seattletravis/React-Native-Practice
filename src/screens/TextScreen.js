import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";


const TextScreen = () => {

    const [ text, setText ] = useState("")

    return (
        <View>
            <Text>What is your Name?</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Button></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 20,
    }
})

export default TextScreen