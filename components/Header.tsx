import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Wrapper from './Wrapper';
import GetModeTitle from '../utils/GetModeTitle';
import { Mode } from '../types';

export default function Header({
  handleOpened,
  mode,
}: {
  handleOpened: (flag: boolean) => void;
  mode: Mode;
}) {
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
    borderColor: '#3785CC',
    borderWidth: 2,
    borderStyle: 'solid',
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
    borderBottomWidth: 2,
    borderBottomColor: '#EEF8FD',
    borderStyle: 'solid',
  },
});
