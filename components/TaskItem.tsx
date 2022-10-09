import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Obj } from '../pages/Homework';

import Wrapper from './Wrapper';


export default function TaskItem({
  title,
  text,
  status,
  onStatus,
  id,
  onRemove,
}: {
  title: string,
  text: string,
  status: boolean,
  onStatus: (obj: Obj) => void,
  id: string | number,
  onRemove: () => void,
}) {
  const [completed, setCompleted] = useState(status);
  function handleCompleted()  {
    setCompleted(!completed);
    onStatus({ id, text, title, status });
  }
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
              [styles.task, {textDecorationLine: completed ? 'line-through' : 'none'} ]
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
    borderBottomWidth: 2,
    borderBottomColor: '#EEF8FD',
    borderStyle: 'solid',
  },
  left: {
    flexDirection: 'row',
  },
  status: {
    marginRight: 21,
  },
  subject: {
    fontSize: 17,
    fontWeight: "500",
  },
  task: {
    fontSize: 12,
    maxWidth: 170,
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
