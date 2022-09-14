import React from 'react';
import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import getModeTitle from '../utils/GetModeTitle';

export default function FilterModal({ onMode, handleOpened, mode }) {
  const [titleState, setTitleState] = useState('');
  const [taskState, setTaskState] = useState('');

  return (
    <View style={styles.modal}>
      <View style={styles.modalFilter}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onMode('');
              handleOpened(false);
            }}>
            <Text
              style={[
                styles.title,
                styles.buttonRight,
                !getModeTitle(mode)[0] ? styles.buttonActive : null,
              ]}>
              Показывать все задания
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onMode('completed');
              handleOpened(false);
            }}>
            <Text
              style={[
                styles.title,
                styles.buttonRight,
                getModeTitle(mode)[0] === 1 ? styles.buttonActive : null,
              ]}>
              Выполненные
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onMode('not_completed');
              handleOpened(false);
            }}>
            <Text
              style={[
                styles.title,
                styles.buttonRight,
                getModeTitle(mode)[0] === 2 ? styles.buttonActive : null,
              ]}>
              Не выполненные
            </Text>
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
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    zIndex: 3,
  },
  modalFilter: {
    maxWidth: 300,
    background: 'rgba(249, 249, 249, 0.94)',
    backdropFilter: 'blur(54.3656px)',

    paddingHorizontal: 45,
    borderRadius: 14,
    textAlign: 'center',
  },
  button: {
    fontWeight: 500,
    fontSize: 16,
    paddingVertical: 18,
  },

  buttonActive: {
    color: '#3785CC',
  },
});
