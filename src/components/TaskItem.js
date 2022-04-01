import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TaskItem = ({taskTitle, taskDatetime, status}) => {
  const dateTime = new Date(taskDatetime);
  const todayDate = new Date(Date.now()).toISOString().substring(0, 10);

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity style={styles.TOC}></TouchableOpacity>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTextStyle}>{taskTitle}</Text>
        <Text style={styles.textStyle}>
          {dateTime.toLocaleTimeString([], {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
        <TouchableOpacity>
          <FontAwesome5
            name={'trash'}
            size={15}
            color={'red'}
            style={{
              position: 'absolute',
              right: 10,
              bottom: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  TOC: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'gray',
    borderRadius: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    width: '5%',
    borderColor: '#C1C1C1',
    marginVertical: 10,
  },
  taskTextStyle: {
    color: 'black',
    marginBottom: 10,
    fontSize: 15,
  },
  taskContainer: {
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default TaskItem;
