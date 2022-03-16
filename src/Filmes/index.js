import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import Sinopse from '../Sinopse';

export default function Filmes({data}){
    const[visibleModal, setVisibleModal] = useState(false)

    return(
        <View> 
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image
                style={styles.foto}
                source={{uri: data.foto}}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity style={styles.botao} onPress={ ()=> setVisibleModal(true)}>
                        <Text style={styles.textoBtn}>Leia Mais</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Modal
            animationType='slide'
            visible={visibleModal}
            transparent={true} >

                <Sinopse filmes ={data} voltar={ () => setVisibleModal(false)}/>
            </Modal>

        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:'#E52246',
        margin:15,
        elevation: 2
    },
    foto:{
        height: 250,
        zIndex: 2,
    },
    titulo:{
        padding: 12,
        fontSize: 18,
        color: '#FFF'
    },
    areaBtn:{
        alignItems:'flex-end',
        marginTop: -45,
        zIndex: 9,
    },
    botao:{
        width:100,
        backgroundColor: '#09A6FF',
        opacity:1,
        padding: 8,
        borderTopLeftRadius: 12,
    },
    textoBtn:{
        textAlign:'center',
        fontSize: 16,
        color: '#fff',
    }
})