import React, {useState} from "react";

import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';

import Button from "../components/Button";

export default function Home(){

    let[v1, setV1] = useState();
    let[v2, setV2] = useState();
    let[total, setTotal] = useState('0.00');

    function calcularSoma(){
        let resultado = Number.parseInt(v1) + Number.parseInt(v2);
        setTotal(resultado);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem-Vindo ao Projeto Soma!</Text>

            <Image style={{width: 200, height:200, borderRadius: 50}}
                //fazendo uso de uma imagem externa
                source={{uri: 'https://cdn.pixabay.com/photo/2017/08/03/21/11/art-2578353_960_720.jpg'}} 
            /> 

            <TextInput style={styles.input}
                placeholder="Digite o 1º valor"
                onChangeText={setV1}
            />

            <TextInput style={styles.input}
                placeholder="Digite o 2º valor"
                onChangeText={setV2}
            />
            <TouchableOpacity style={styles.button} onPress={calcularSoma}>
                <Button/>
            </TouchableOpacity>
            
            <Text style={styles.title}>
                Resultado: {total}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#6FB2D2',
        paddingVertical:70,
        paddingHorizontal:30,
        justifyContent: 'center',
        alignItems:'center'
    },

    title:{
        color:'#0E185F',
        fontSize:24,
        marginBottom: 5,
        fontWeight:'bold',
        textAlign:'center',
    },

    input:{
        backgroundColor:'#EEEEEE',
        color:'#000000',
        fontSize:18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7
    },

})