import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import api from "./src/services/api";
import Filmes from "./src/Filmes";

export default function App(){
    const[filmes, setFilmes] = useState([]);
    const[loading, setLoading] = useState(true)

    useEffect( () => {
        async function loadFilmes(){
            const response = await api.get('r-api/?api=filmes');

            setFilmes(response.data);
            setLoading(false);
        }

        loadFilmes();

    },[])

    if(loading){
        return(
            <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor: '#121212'}}>
                <ActivityIndicator color ='#FFF' size={45}/>
            </View>
        )
    }else{
        return(
            
            <View style={styles.container}>

                <FlatList
                data={filmes}
                renderItem={ ({item}) => <Filmes data={item}/> }
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#121212'
    },
    
})
