import React from 'react';
import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  GestureResponderEvent,
} from 'react-native';
import { Obj } from '../pages/Homework';

import Wrapper from './Wrapper';

export default function CreateTask({
  onAdd,
  onModal,
}: {
  onAdd: (obj: Obj) => void;
  onModal: (event?: GestureResponderEvent) => void;
}) {
  const [titleState, setTitleState] = useState('');
  const [taskState, setTaskState] = useState('');

  const handleAdd = () => {
    onAdd({
      title: titleState,
      text: taskState,
    });
    setTaskState('');
    setTitleState('');
    onModal();
  };

  return (
    <View style={styles.modal}>
      <View style={styles.modalCreate}>
        <View style={styles.modalTop}>
          <Text style={styles.title}>Добавить предмет</Text>
          <Text style={styles.lable}>Укажите заголовок и задание</Text>
        </View>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setTitleState}
            value={titleState}
            placeholder="Заголовок"
          />
          <TextInput
            style={styles.input}
            onChangeText={setTaskState}
            value={taskState}
            placeholder="Задание"
          />
        </SafeAreaView>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={onModal} style={styles.button}>
            <Text style={styles.title}>Отмена</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAdd} style={styles.button}>
            <Text style={(styles.title, styles.buttonRight)}>Сохранить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    zIndex: 2,
  },
  modalCreate: {
    maxWidth: 270,
    backgroundColor: 'rgba(249, 249, 249, 0.94)',
    backdropFilter: 'blur(54.3656px)',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 14,
  },
  modalTop: {
    textAlign: 'center',
    marginBottom: 16,
  },
  title: {
    fontWeight: "500",
    fontSize: 17,
    marginBottom: 4,
  },
  lable: {},
  input: {
    fontSize: 13,
    paddingHorizontal: 6,
    paddingVertical: 7,
    backgroundColor: 'white',
    marginBottom: 15,
    borderColor: 'rgba(60, 60, 67, 0.3)',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 7,
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // borderTop: '1px solid white',
  },
  button: {
    paddingTop: 10,
  },
  buttonRight: {
    color: '#3784CC',
    fontWeight: "500",
    fontSize: 17,
  },
});
