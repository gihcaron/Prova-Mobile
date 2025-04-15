import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { Card } from '../components/Card';

export default function Amanda(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>BLABLBLABLABLA</Text>
            <Image source={require('./../assets/brazil.jpg')}
            style={styles.brazil}/>
            <Image source={require('./../assets/italy.jpg')}
            style={styles.italy}/>

            <TextInput placeholder="asdjfcnke" style={styles.input}></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Clique aqui</Text>
            </TouchableOpacity>
        </View>

//COMPONENTES

        



    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "red",
    },

    brazil: {
        width: 200,
        height: 200,
        borderRadius: 50,
    },

    italy: {
        width: 200,
        height: 200,
        borderRadius: 50,
    },

    title:{
        fontSize: 20,
        textAlign: "center",
    },

    input:{
        width: '80%',
        height:40,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: 'yellow'
    },

    button:{
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText:{
        color: "blue",
        fontSize: 16,
        fontWeight: "bold",
    },

});