
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { Card } from '../components/Card'; 

export default function Amanda(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>BLABLBLABLABLA</Text>

            <Image source={require('./../assets/brazil.jpg')}
            style={styles.Image}/>
            <Image source={require('./../assets/italy.jpg')}
            style={styles.Image}/>
           

            <TextInput placeholder="Pesquisar" style={styles.input}></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Clique aqui</Text>
            </TouchableOpacity>

            <div>
                <div className={styles.cards}>
                <Card title="Card 1" description="primeiro" />
                <Card title="Card 2" description="segundo" />
                <Card title="Card 3" description="terceiro" />
                </div>

            </div>

        </View>


    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        width: '100%',
        height: '100%',
    },

    Image: {
        display: 'flex',
        width: 200,
        height: 200,
        borderRadius: 50,
    },

    italy: {
        display: 'flex',
        width: 200,
        height: 200,
        borderRadius: 50,
    },

    title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },

    input:{
        width: '50%',
        height:40,
        borderRadius: 50,
        paddingHorizontal: 5,
        backgroundColor: 'gray',
        color: 'black',
        marginTop: 10,
        marginLeft: 5,
    },

    button:{
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 10,
        cursor: 'pointer',
        width: '30%',
        marginBottom: 10,
    },

    buttonText:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

    cards:{
        padding: 16,
        margin: 8,
        border: '1px solid #ddd',
    },

});