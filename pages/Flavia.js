import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function Flavia () {
    <View style={styles.container}>
        <Image style={styles.icone} source={require('./../assets/seta-esquerda.png')}/>
        <Image style={styles.imagem} source={require('./../assets/hellocafe.jpg')}/>
        <Image style={styles.imagem} source={require('./../assets/hellocomputador.jpg')}/>
        <Image style={styles.imagem} source={require('./../assets/hellolivro.jpg')}/>
        <Text style={styles.description}>Atividade avaliativa de mobile para testar nossos conhecimentos gerais e desenvolver melhor nossas habilidades técnicas.</Text>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
    </View>
}