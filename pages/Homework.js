import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';

import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import Wrapper from '../components/Wrapper'; 

export default function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <View style={styles.taskList}>
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </View>
      </Wrapper>
    </>
  );
}

const styles = StyleSheet.create({
  taskList: {
    flexDirection: 'column',
  },
});
