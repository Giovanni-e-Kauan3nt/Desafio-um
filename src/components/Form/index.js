import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";


export default function Form(){
return(
    <View style={styles.container}>
        <View >
            <Text style={styles.titulos}>NOME</Text>
            <TextInput style={styles.caixa} placeholder="" keyboardType="numeric"/>
            <Text>----------------------------------------------------</Text>

            <Text style={styles.titulos}>TELEFONE</Text>
            <TextInput style={styles.caixa}  placeholder="" keyboardType="numeric"/>
            <Text>----------------------------------------------------</Text>

            <Text style={styles.titulos}>e-MAIL</Text>
            <TextInput  style={styles.caixa} placeholder= "informe o seu email" keyboardType="numeric"/>
            <Text>----------------------------------------------------</Text>

            <TouchableOpacity style={styles.caixaBotao} onPress={()=> {validationImc()}}>
            <Text style={styles.textoBotao}> Enviar</Text>
            </TouchableOpacity>
        </View>
        
    </View>
    )
}
    