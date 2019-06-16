import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default (title) => {
  return {
    headerTitle: 
      <View style={{ width:'100%', alignItems: "center"}}>
        <Text style={{ color:'#fff',fontWeight: 'bold', fontSize: 16}} >{title}</Text>
      </View>,
      headerStyle: {
        backgroundColor: '#FF4343',
        barHeight: 60,
      },
    headerLeft:
      <View style={{ padding:8 }}>
        <MaterialIcons name="directions-bike" size={32} color="#fff" />
      </View>,
    headerRight:
      <View style={{ padding:8 }}>
        <AntDesign name="setting" size={32} color="#fff" />
      </View>,
  };
};