//Copiado da pagina de usuario da atividade 10 de mobile com algumas mudanças

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function UserScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Página do Usuário</Text>
        <Image style={styles.userImage} source={require('../assets/user1.jpg')} />
        <Text style={styles.info}>Nome: Ana Julia</Text>
        <Text style={styles.info}>Email: ana.julia@gmail.com</Text>
        <Text style={styles.info}>Turma: TDS1</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AnaJu')}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { 
    flex: 1, 
    backgroundColor: '#ffb5ff' 
}, 

  container: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center', padding: 20
},

  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
},

  photo: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20 
},

  info: { 
    fontSize: 16, 
    marginBottom: 10 
},

  button: { 
    width: '80%', 
    padding: 10, 
    backgroundColor: '#e357e0', 
    alignItems: 'center', 
    marginTop: 10 
},

  buttonText: { 
    color: 'white', 
    fontSize: 16 
},

  languagesContainer: { 
    marginTop: 20, 
    marginBottom: 20 
},

  languageRow: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginBottom: 10 
},

  languageImage: { 
    width: 50, 
    height: 50, 
    marginHorizontal: 10 
},

  userImage: { 
    width: 200, 
    height: 200, 
    borderRadius: 100, 
    marginBottom: 20 
},

});