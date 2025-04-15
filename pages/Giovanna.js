import React from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView,
    TouchableOpacit,
    Image
 } from 'react-native';

 import { useNavigation } from "@react-navigation/native";

//  Componentes

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image 
            style={styles.Profile}
            source={{uri:"https://avatars.githubusercontent.com/u/158209996?v=4"}}
             />

            <Text style={styles.text}>Olá, Giovanna Caron!</Text>
            <Text style={styles.text}>Seja Bem-vinda de volta.</Text>
        </View>
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
});