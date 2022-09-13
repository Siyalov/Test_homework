import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import Homework from './pages/Homework';

export default function App() {
  useEffect(() => {}, []);

  return (
    <View>
      <Homework />
    </View>
  );
}
