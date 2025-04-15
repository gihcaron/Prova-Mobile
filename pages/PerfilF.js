import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Flavia () {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('./../assets/eu.jpg')}/>
            <Text style={styles.nome}>Flavia Regina Alexandre Mendes</Text>
            <StatusBar style='auto'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255, 191, 228)', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    nome: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    imagem: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
});