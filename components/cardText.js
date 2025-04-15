import React from "react";

import { 
    StyleSheet, 
    Text, 
    TouchableOpacity,
 } from 'react-native';

 const Categorias = ({Title, Text}) => {
    return (
     <View style={styles.textArea}>
               <Text style={styles.AreaTitle}>
                  {Title}
               </Text>
   
               <Text style={styles.AreaText}>
                 {Text}
               </Text>
      </View> 
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