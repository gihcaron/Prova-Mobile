import React from 'react';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Flavia ({ text }) {
    return (
        <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#333",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 5,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    });