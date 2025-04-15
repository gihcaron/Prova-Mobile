import { StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';

import { Image } from 'react-native-web';
export default function Flavia() {
    return (
    <View style={styles.container}>
        <Image source ={require('./../assets/seta-esquerda.png')}style={styles.Icon}></Image>
        <Image source ={require('./../assets/hellocafe.jpg')}style={styles.Image}></Image>
        <Image source ={require('./../assets/hellocomputador.jpg')}style={styles.Image}></Image>
        <Image source ={require('./../assets/hellolivro.jpg')}style={styles.Image}></Image>
    <Text styles>Atividade avaliativa de mobile para testar nossos conhecimentos gerais e desenvolver melhor nossas habilidades técnicas. Nessa atividade nós criamos um aplicativo funcional, utilizando os conceitos de navegação, componentes visuais e organização com React Expo Native.
    </Text>
    <TouchableOpacity>
        
    </TouchableOpacity>
    </View>
);
}

    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    //lembrete*******: estilizar imagens, colocar uma do lado da outra com rolagem
    //icon no canto da tela parte superior
});

//NÃO ESTÁ ROLANDO PRA BAIXO e não aparece o texto (diminuir imagem)!!!!!!!! ARRUMAR***