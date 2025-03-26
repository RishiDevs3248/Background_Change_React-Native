/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [BGcolor,setBGcolor] = useState('#000000')
  const [BGcolor1,setBGcolor1] = useState('#ffffff')
  const [BGcolor2,setBGcolor2] = useState('#ffffff')
  const [BGcolor3,setBGcolor3] = useState('#ffffff')
  const [BGcolor4,setBGcolor4] = useState('#ffffff')

  const generateBG =()=>{
    const HEXrange = "0123456789ABCDEF";
    let color = "#";
    let color1 = "#";
    let color2 = "#";
    let color3 = "#";
    let color4 = "#";

    for (let i = 0; i < 6; i++) {
      color += HEXrange[Math.floor(Math.random() * 16)]
    }
    for (let i = 0; i < 6; i++) {
      color1 += HEXrange[Math.floor(Math.random() * 16)]
    }
    for (let i = 0; i < 6; i++) {
      color2 += HEXrange[Math.floor(Math.random() * 16)]
    }
    for (let i = 0; i < 6; i++) {
      color3 += HEXrange[Math.floor(Math.random() * 16)]
    }
    for (let i = 0; i < 6; i++) {
      color4 += HEXrange[Math.floor(Math.random() * 16)]
    }
    setBGcolor(color)
    setBGcolor1(color1)
    setBGcolor2(color2)
    setBGcolor3(color3)
    setBGcolor4(color4)
  }
  return (
    <>
      <StatusBar backgroundColor={BGcolor}/>
        <View style={[styles.Container,{backgroundColor:BGcolor}]}> 
        <View style={[styles.Triangle1,{borderBottomColor:BGcolor1}]}></View>
        <View style={[styles.Square,,{backgroundColor:BGcolor2}]}></View>
          <TouchableOpacity onPress={generateBG }>
            <View style={styles.ActionBtn}>
              <Text style={[styles.ActionBtnText]}>
                Press me
              </Text>
            </View>
          </TouchableOpacity>
        <View style={[styles.Triangle2,{borderBottomColor:BGcolor3}]}></View>
        <View style={[styles.Circle,{backgroundColor:BGcolor4}]}></View>
        </View> 
    </>
  );
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  ActionBtn:{
    borderRadius : 12, 
    backgroundColor:'#6A1B4D',
    paddingVertical:10,
    paddingHorizontal:40,
  },
  ActionBtnText:{
    color:'#fff',
    fontSize:20,
    textTransform:'uppercase',
  },
  Triangle1:{
    position:'absolute',
    top:100,
    left:75,
    width: 0,
	  height: 0,
    borderLeftColor :'transparent',
    borderLeftWidth:25,
    borderRightColor :'transparent',
    borderRightWidth:25,
    borderBottomWidth:50,
  },
  Triangle2:{
    position:'absolute',
    bottom:100,
    right:75,
    width: 0,
	  height: 0,
    borderLeftColor :'transparent',
    borderLeftWidth:25,
    borderRightColor :'transparent',
    borderRightWidth:25,
    borderBottomWidth:50,
  },
  Square:{
    position:'absolute',
    top:200,
    right:75,
    height: 50,
    width: 50,
  },
  Circle:{
    position:'absolute',
    bottom:250,
    left:100,
    height: 50,
    width: 50,
    borderRadius:'50%',
  }
});

export default App;
