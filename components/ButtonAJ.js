import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ text, style}) {
    return (
        <TouchableOpacity style={[StyleSheet.button, style]}>
            <Text style={StyleSheet.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#777",
        padding: 10,
        borderRadius: 2,
        alignItems: "center",
        marginVertical: 5,
    },
    text: {
        color: red,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    });