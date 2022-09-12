import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Wrapper from './Wrapper';


export default function TaskItem({
  title,
  text,
  status,
  onStatus,
  id,
  onRemove,
}) {
  const [completed, setCompleted] = useState(status);
  const handleCompleted = () => {
    setCompleted(!completed);
    onStatus({ id, text, title, status });
  };
  const handleRemove = () => {
    onRemove();
  };

  return (
    <View style={styles.taskBlock}>
      <View style={styles.left}>
        <TouchableOpacity onPress={handleCompleted}>
          <Image
            style={styles.status}
            source={
              completed
                ? require('../Icons.js/tick-square.svg')
                : require('../Icons.js/tick-square1.svg')
            }
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.subject}>{title}</Text>
          <Text
            style={
              (styles.task, { textDecoration: completed ? 'line-through' : '' })
            }>
            {text}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.trash} onPress={handleRemove}>
        <Image source={require('../Icons.js/trash.svg')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskBlock: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 13,
    borderBottom: '2px solid #EEF8FD',
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
