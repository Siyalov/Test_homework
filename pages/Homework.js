import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';

import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import Wrapper from '../components/Wrapper';
import AddButton from '../components/AddButton';
import CreateTask from '../components/CreateTask';

export default function Homework() {
  const [modalOpened, setModalOpened] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      status: false,
      subjectTitle: 'Русский язык',
      taskText: 'Учебник, стр. 4 ',
    },
    {
      id: 2,
      status: true,
      subjectTitle: 'Анг язык',
      taskText: 'Учебник, стр. 4 ',
    },
    {
      id: 3,
      status: true,
      subjectTitle: 'Немецкий язык',
      taskText: 'Учебник, стр. 4 ',
    },
  ]);

  const handleModal = () => {
    setModalOpened(!modalOpened);
  };

  const handleStatus = (obj) => {
    console.log(obj);
    setTasks((prev) => [
      ...prev.map((item) => {
        if (item.id === obj.id) {
          return {
            ...obj,
            status: !obj.status,
          };
        }
        return item;
      }),
    ]);
  };

  const remove = (id) => {
    console.log(id);
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const addTask = (obj) => {
    console.log(obj);
    setTasks((prev) => [
      ...prev,
      {
        id: new Date().getTime(),
        status: false,
        subjectTitle: obj.title,
        taskText: obj.text,
      },
    ]);
  };
  return (
    <>
      {modalOpened ? <CreateTask onAdd={(obj) => addTask(obj)} onModal={handleModal} /> : null}

      <Header />
      <Wrapper>
        <View style={styles.taskList}>
          {tasks.length
            ? tasks.map((item) => (
                <TaskItem
                  title={item.subjectTitle}
                  text={item.taskText}
                  status={item.status}
                  id={item.id}
                  onStatus={() => handleStatus(obj)}
                  onRemove={() => remove(item.id)}
                />
              ))
            : null}
        </View>
        <AddButton onModal={handleModal}/>
      </Wrapper>
    </>
  );
}

const styles = StyleSheet.create({
  taskList: {
    flexDirection: 'column',
  },
});
