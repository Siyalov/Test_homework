import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Wrapper from './Wrapper';

export default function AddButton() {
  return (
    <View>
      <Wrapper>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Добавить</Text>
        </TouchableOpacity>
      </Wrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    border: '2px solid #3785CC;',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 10,
    marginTop: 57,
    marginBottom: 53,
    borderRadius: 6,
    background: '#3785CC',
  },
  buttonText:{
    color: '#FFFFFF',
  },
});
