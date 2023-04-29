import { View, Text, Image, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../colors'
import axios from 'axios'





const Main = () => {

    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [data, setdata] = useState([])
    function btnFunction(){
        if(firstname.length===0){
            Alert.alert('First Name should not be blank')
        }else if(lastname.length===0){
            Alert.alert('Last Name should not be blank')
        }
        else{
            const options = {
                method: 'GET',
                url: 'https://the-love-calculator.p.rapidapi.com/love-calculator',
                params: {
                    fname: firstname,
                    sname: lastname
                },
                headers: {
                    'content-type': 'application/octet-stream',
                    'X-RapidAPI-Key': '6295ed2ee1msh85caf8da0897279p1fb325jsn7b3889ade925',
                    'X-RapidAPI-Host': 'the-love-calculator.p.rapidapi.com'
                }
            };
    
            axios
                .request(options)
                .then((Love) => {
                    setdata(Love.data);
                    // setPlanetdata(resPlanet.data);
                    console.log(Love.data)
                })
        }
    }

   let Percentage;
     if(firstname.length===0 || lastname.length===0){
         Percentage = 'Result'
     }else{
        Percentage=`${Math.floor(parseInt(data["percentage match: "]))}%`
     }

    return (


        <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: colors.secondry, fontSize: 40 }}>Love Calculator</Text>
            <Image style={{ width: '100%', alignContent: 'center' }} source={require('../assets/heart.png')} resizeMode='contain' />
            <Text style={{ color: colors.secondry, fontSize: 40 }}>{Percentage}</Text>
            <Text style={{ color: colors.secondry, fontSize: 20, marginVertical: '5%' }}>{data["result: "]}</Text>
            <TextInput style={mainStyle.inputEdit} placeholder='Enter First Person' onChangeText={text => setfirstname(text)} />
            <TextInput style={mainStyle.inputEdit} placeholder='Enter Second Person' onChangeText={text => setlastname(text)} />
            <Text style={mainStyle.loveBtn} onPress={btnFunction}>Calculate Love</Text>
        </View>


    )
}

const mainStyle = StyleSheet.create({
    loveBtn: {
        backgroundColor: colors.secondry,
        color: colors.primary,
        paddingVertical: 7,
        borderRadius: 42,
        width: '50%',
        textAlign: 'center',
    },
    inputEdit: {
        borderWidth: 1,
        paddingVertical: 3,
        width: '50%',
        textAlign: 'center',
        marginBottom: '5%',
        borderRadius: 43,
        borderColor: colors.secondry
    }
})

export default Main