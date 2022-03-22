import React, {useState} from 'react';
import {View, Modal, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomModal = ({navigation, children, visible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
      transparent={true}
      statusBarTranslucent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={onClose}>
            <Text style={{textAlign: 'right', fontWeight: 'bold'}}>X</Text>
          </TouchableOpacity>
          <View>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    borderWidth: 1,
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
});

export {CustomModal};
