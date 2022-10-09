import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';

import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import Wrapper from '../components/Wrapper';
import AddButton from '../components/AddButton';
import CreateTask from '../components/CreateTask';
import FilterModal from '../components/FilterModal';

import {addToStorage, getFromStorage} from '../utils/LocalStorageExplorer';
import { Mode } from '../types';

export interface Task {
  id: string | number,
  subjectTitle: string,
  taskText: string,
  status: boolean,
}

export interface Obj {
  id?: string | number,
  title: string,
  text: string,
  status?: boolean,
}

export default function Homework() {
  const [modalOpened, setModalOpened] = useState(false);
  const [filterOpened, setFilterOpened] = useState(false);
  const [modeState, setModeState] = useState<Mode>('');

  const [tasks, setTasks] = useState(getFromStorage('tasks') as Task[] || [])
  console.log(getFromStorage('tasks'))

  const handleModal = () => {
    setModalOpened(!modalOpened);
  };

  const filterTasks = (mode = '') => {
    const modeFilter = mode.toLowerCase();
    switch (modeFilter) {
      case 'completed':
        return tasks.filter((item) => item.status === true);
      case 'not_completed':
        return tasks.filter((item) => item.status !== true);
      default:
        return tasks;
    }
  };
  //console.log(filterTasks('not_completed'));

  const handleStatus = (obj: Obj) => {
    console.log(obj, 'ttt');

    setTasks((prev) => [
      ...prev.map((item) => {
        if (item.id === obj.id) {
          return {
            id: obj.id,
            subjectTitle: obj.title,
            taskText: obj.text,
            status: !obj.status,
          };
        }
        return item;
      }),
    ]);
  };

  const remove = (id: string | number) => {
    console.log(id);
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const addTask = (obj: Obj) => {
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

  useEffect(() => {
    addToStorage('tasks', tasks);
  }, [tasks]);

  return (
    <>
      {modalOpened ? (
        <CreateTask onAdd={(obj) => addTask(obj)} onModal={handleModal} />
      ) : null}
      {filterOpened ? (
        <FilterModal
          mode={modeState}
          handleOpened={setFilterOpened}
          onMode={setModeState}
        />
      ) : null}

      <Header handleOpened={setFilterOpened} mode={modeState} />
      <Wrapper>
        <View style={styles.taskList}>
          {tasks.length
            ? filterTasks(modeState).map((item) => (
                <TaskItem
                  key={item.id}
                  title={item.subjectTitle}
                  text={item.taskText}
                  status={item.status}
                  id={item.id}
                  onStatus={(obj) => handleStatus(obj)}
                  onRemove={() => remove(item.id)}
                />
              ))
            : null}
        </View>
        <AddButton onModal={handleModal} />
      </Wrapper>
    </>
  );
}

const styles = StyleSheet.create({
  taskList: {
    flexDirection: 'column',
  },
});
