import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, TextInput, Button, } from 'react-native';
import { styles } from './styles';

export default function Home() {
    const [text, settext] = useState("")
    const [listItem, setListItem] = useState([])
  
    const click= ()=>{
        setListItem([text])
        
    }
  
    return (
    <View style={styles.container}>
    <TextInput style ={styles.input} value= {text} onChangeText = {settext}/>
    <Button title= "apagar tudo" onPress={click}/>
    {listItem.map((item)=>
    ( <Text>{item}</Text>)
    )}
   
    </View>
  );
}

