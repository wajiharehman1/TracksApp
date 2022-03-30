import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const WeekTaskItem = ({taskTitle, taskDatetime, status}) => {
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
          }) +
            '\t' +
            dateTime.toLocaleDateString()}
        </Text>
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
    color: 'gray',
    marginBottom: 10,
    fontSize: 15,
  },
  taskContainer: {
    paddingHorizontal: 10,
  },
});

export default WeekTaskItem;
