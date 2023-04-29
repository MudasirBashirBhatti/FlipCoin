import { View, Text ,Image, TextInput, Button, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { colors } from '../colors'

const Main = () => {
  return (
      <View style={{width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:colors.secondry, fontSize:40}}>Love Calculator</Text>
        <Image style={{width:'100%', alignContent:'center'}} source={require('../assets/heart.png')} resizeMode='contain'/>
        <Text style={{color:colors.secondry, fontSize:40}}>50%</Text>
        <Text style={{color:colors.secondry, fontSize:20, marginVertical:'5%'}}>My Suggestions are here</Text>
        <TextInput style={mainStyle.inputEdit} placeholder='Enter First Person' />
        <TextInput style={mainStyle.inputEdit} placeholder='Enter Second Person' />
        <Text style={mainStyle.loveBtn}>Calculate Love</Text>
    </View>
  )
}

const mainStyle= StyleSheet.create({
    loveBtn:{
        backgroundColor:colors.secondry,
        color:colors.primary,
        paddingVertical:7,
        borderRadius:42,
        width:'50%',
        textAlign:'center',
    },
    inputEdit:{
        borderWidth:1,
        paddingVertical:3,
        width:'50%',
        textAlign:'center',
        marginBottom:'5%',
        borderRadius:43,
        borderColor:colors.secondry
    }
})

export default Main