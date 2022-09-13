import React from 'react';
import { useState } from 'react';
import { View, StyleSheet,Text,TouchableOpacity } from 'react-native';

import Wrapper from './Wrapper';

export default function Header({handleOpened}) {
  return (
    <View style={styles.header}>
      <Wrapper>
        <TouchableOpacity style={styles.button} onPress={()=> handleOpened(true)}>
        <Text style={styles.textButton}>Показывать все задания</Text>
        </TouchableOpacity>
      </Wrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    border: '2px solid #3785CC;',
    color: '#3785CC',
    textAlign: 'center',
    padding: 10,
    marginTop: 57,
    marginBottom: 53,
    borderRadius: 6,

  },
  textButton:{
     color: '#3785CC',
  },
  header: {
    borderBottom: '2px solid #EEF8FD',
  },
});
