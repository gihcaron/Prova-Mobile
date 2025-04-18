import React from "react";

import { 
    StyleSheet, 
    Text, 
    TouchableOpacity,
 } from 'react-native';

 const Categorias = ({Icon, Categoria}) => {
    return (
       <TouchableOpacity style={styles.ContainerCategorias}>
                   <Text style={ styles.icon}>{Icon}</Text>
                   <Text style={ styles.text}>{Categoria}</Text>
        </TouchableOpacity>
    )
 }

 const styles = StyleSheet.create({
  
    ContainerCategorias: {
      width: 80, 
      padding: 5,
      height: 80,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 12,
      backgroundColor: "rgba(246,246,246,255)",
      marginLeft: 12,
    },

  
  });

  export default Categorias;