import React from 'react';
import {useState, useEffect} from 'react';
import { Text, View } from 'react-native';


import Homework from './pages/Homework';




export default function App() {  

useEffect(()=>{
localStorage.setItem('test', JSON.stringify({
  test:1,
}))
}, [])

  return (   
   <View>   
   <Homework/>
   </View>   
  );
}


