import React from 'react';
import { Image, View } from "react-native"
import { TextInput } from 'react-native-web';

export default function Header () {
    return (
        <View>
            <TextInput style={style.userInput}>Pesquise aqui</TextInput>
            <Image style={style.userImage}>source={require('../assets/user1.jpg')}</Image>
        </View>
    )
}

const styles = StyleSheet.create({
    userInput: {
        border: 5,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 5,
    },

    userImage: {
        borderRadius:10,
        alignItens: "center",
    },
})