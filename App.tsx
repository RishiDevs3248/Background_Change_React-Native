/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const [BGcolor,setBGcolor] = useState('#000000')

  const generateBG =()=>{
    const HEXrange = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += HEXrange[Math.floor(Math.random() * 16)]
    }
    setBGcolor(color)
  }
  return (
    <>
      <StatusBar backgroundColor={BGcolor}/>
        <View style={[styles.Container,{backgroundColor:BGcolor}]}> 
          <TouchableOpacity onPress={generateBG }>
            <View style={styles.ActionBtn}>
              <Text style={[styles.ActionBtnText]}>
                Press me
              </Text>
            </View>
          </TouchableOpacity>
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
  }
});

export default App;
