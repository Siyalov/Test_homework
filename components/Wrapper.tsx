import React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    width: '80vw',
  },
});
