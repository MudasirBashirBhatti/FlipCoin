import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Main from './screen/Main'
import { colors } from './colors'

export class App extends Component {
  render() {
    return (
      <View style={appStyles.parent}>
        <Main/>
      </View>
    )
  }
}

const appStyles= StyleSheet.create({
  parent:{
    width:'100%',
      height:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:colors.primary
  }
})

export default App;