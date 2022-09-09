import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import Wrapper from './Wrapper';

export default function TaskItem() {
  const [completed, setCompleted] = useState(false);

  return (
    <View style={styles.taskBlock}>
      <View style={styles.left}>
        <Image
          style={styles.status}
          source={
            completed
              ? require('../Icons.js/tick-square.svg')
              : require('../Icons.js/tick-square1.svg')
          }
        />
        <View>
          <Text style={styles.subject}>Математика</Text>
          <Text style={(styles.task, {textDecoration: completed ? "line-through" : ''})}>Стр. 4 , упр. 36 а, б.</Text>
        </View>
      </View>
      <View style={styles.trash}>
        <Image source={require('../Icons.js/trash.svg')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskBlock: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  left: {
    flexDirection: 'row',
  },
  status: {
    marginRight: 21,
  },
  subject: {
    fontSize: 17,
    fontWeight: 500,
  },
  task: {
    fontSize: 13,
  },
  trash: {
    background: '#F8F8F8',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
});
