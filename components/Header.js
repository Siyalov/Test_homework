import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Wrapper from './Wrapper';
import GetModeTitle from '../utils/GetModeTitle';

export default function Header({ handleOpened, mode }) {
  return (
    <View style={styles.header}>
      <Wrapper>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOpened(true)}>
          <Text style={styles.textButton}>{GetModeTitle(mode)[1]}</Text>
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
  textButton: {
    color: '#3785CC',
  },
  header: {
    borderBottom: '2px solid #EEF8FD',
  },
});
