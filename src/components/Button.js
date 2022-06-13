import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Button() {
 return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Calcular </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#151D3B',
        padding:10,
        borderRadius: 7,
        alignItems:'center',
        marginTop:17,
        marginBottom:7
    },

    buttonText:{
        color:'#FFF',
        fontSize:17,
        fontWeight:'bold'
    }
})