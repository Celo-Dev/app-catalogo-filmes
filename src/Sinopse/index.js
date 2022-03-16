import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Sinopse(props){
    return(
        <View style={styles.container}>
   
            <View style={styles.modalContainer}>    
                <TouchableOpacity style={styles.btnSair} onPress={ props.voltar}>
                    <Text style={{color:'#FFF', fontSize: 16}}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{props.filmes.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.descricao}>{props.filmes.sinopse} </Text>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginRight: 10,
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    modalContainer:{
        width: '90%',
        height: '80%',
        backgroundColor:'#121212',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    btnSair:{
        backgroundColor:'#E52246',
        padding: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    titulo:{
        color:'#FFF' ,
        fontSize: 24,
        textAlign:'center',
        padding:10,
        fontWeight: 'bold'
    },
    sinopse:{
        color:'#FFF',
        marginLeft: 10,
        fontSize: 17,
        marginTop: 12,
        marginBottom: 8,
    },
    descricao:{
        color:'#FFF',
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,

    }
})