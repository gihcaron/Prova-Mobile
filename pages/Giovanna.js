import React from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView,
    TouchableOpacity,
    Image
 } from 'react-native';

 import { useNavigation } from "@react-navigation/native";

//  Componentes

import Categorias  from "../components/Categorias";

export default function App() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image 
            style={styles.Profile}
            source={{uri:"https://avatars.githubusercontent.com/u/158209996?v=4"}
            }
             />
        <View style={styles.textContainer}>
            <Text style={styles.titleHeader}
            onPress={() => navigation.navigate('Giovanna')}
            >Olá, Giovanna Caron!</Text>
            <Text style={styles.textHeader}>Seja Bem-vinda de volta.</Text>
        </View>
        </View>

        <ScrollView
          style={{ backgroundColor: "#fff" }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >

       <View style={styles.categorias}>

       <Categorias
        Icon="😊"
        Categoria="oi"
        />

       <Categorias
        Icon="😊"
        Categoria="oi"
        />

       <Categorias
        Icon="😊"
        Categoria="oi"
        />

       <Categorias
        Icon="😊"
        Categoria="oi"
        />

       <Categorias
        Icon="😊"
        Categoria="oi"
        />

       <Categorias
        Icon="😊"
        Categoria="oi"
        />

       <Categorias
        Icon="😊"
        Categoria="oi"
        />

   
       </View>

    </ScrollView>

        <View style={styles.textArea}>
            <Text style={styles.AreaTitle}>
                Conheça a Jujuba
            </Text>

            <Text style={styles.AreaText}>
              Princesa Jujuba ama seus súditos e é amada pela maioria deles por defendê-los incansavelmente quando há algum problema. Em "Princesa Biscoito", sua dedicação ao Reino Doce é mostrada quando ela visita um Orfanato Doce e passa algum tempo para animar as crianças.
            </Text>
        </View> 


        <View style={styles.textArea}>
            <Text style={styles.AreaTitle}>
                Conheça a Jujuba
            </Text>

            <Text style={styles.AreaText}>
              Princesa Jujuba ama seus súditos e é amada pela maioria deles por defendê-los incansavelmente quando há algum problema. Em "Princesa Biscoito", sua dedicação ao Reino Doce é mostrada quando ela visita um Orfanato Doce e passa algum tempo para animar as crianças.
            </Text>
        </View> 

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(245, 245, 245, 0.83)",
    height:80,
    width: "100%",
  },

  textContainer: {
    display: "flex",
    flexWrap: 'wrap',
    flexDirection:"column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 20,
    height:80,
    width: "100%",
    marginTop:20, 
  },

  titleHeader :{
    fontWeight:600,
    fontSize: 17,
  },

  textHeader:{
    fontWeight:400,
    fontSize: 14,
  },

  Profile: {
    marginLeft: 20,
    height:50,
    width: 50,
    borderRadius:50,
  },

  categorias: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "space-evenly",
    alignItems: "center"
  },
  

  ContainerCategorias: {
    width: "20%", 
    padding: 5,
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "rgba(246,246,246,255)",
    ShadowColor: "#000",
    shadowOpacity: 0.1,
    textShadowOffset: {
        width: 0,
        height: 2
    },
  },

  textArea:{
    with: 80,
    height: 80,
    borderRadius: 10,
    padding: 20,
    backgroundColor:'rgba(255, 176, 231, 0.83)',
    marginBottom: 20,
  }

});