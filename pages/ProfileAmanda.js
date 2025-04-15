import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileAmanda(){
return(
    <View style={styles.container}>
    <Text style={styles.title}>Amanda</Text>
    <Text style={styles.description}>
       tds1
    </Text>
    <Image source={{ uri: 'https://avatars.githubusercontent.com/u/158229094?v=4' }} style={styles.profileImage} />
    <View style={styles.iconContainer}>
        <Ionicons name='logo-html5' size={40} color='pink' />
        <Ionicons name='logo-css3' size={40} color='blue' />
        <Ionicons name='logo-javascript' size={40} color='yellow' />
        <Ionicons name='logo-react' size={40} color='cyan' />
    </View>
    <Text 
                style={styles.linkPerfil} 
                onPress={() => navigation.navigate('ProfileAmanda')}>
                Acesse seu perfil
            </Text>
</View>
);
}