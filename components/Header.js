import React from 'react';
import { useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';

import Wrapper from './Wrapper';

export default function Header() {
  return (
    <View style={styles.header}>
      <Wrapper>
        <View style={styles.button}>
        <Text>Показывать все задания</Text>
        </View>
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
  header: {
    borderBottom: '2px solid #EEF8FD',
  },
});
