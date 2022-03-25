import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Styles from '../styles/Styles';
import {Button, InputWithoutLabel} from '../common';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  addTasks,
  titleChanged,
  dateChanged,
  timeChanged,
} from '../actions/TaskActions';
import {connect} from 'react-redux';

const CreateTaskScreen = props => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState('Set Date');
  const [timeText, setTimeText] = useState('Set Time');
  const onChange = (event, selectedDate) => {
    console.log('Selected date', selectedDate);
    let tempDate = new Date(selectedDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    let fTime = tempDate.getHours() + ' : ' + tempDate.getMinutes();
    console.log('Current Date: ', fDate + ' ' + fTime);

    setShow(Platform.OS === 'ios');
    setDate(selectedDate);
    setDateText(fDate);
    setTimeText(fTime);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <AppWrapper headerText={'New Task'}>
      <View style={styles.containerCategory}>
        <FontAwesome5
          name={'circle'}
          size={20}
          color={props.route.params.categoryColor}
          solid
        />
        <Text style={[Styles.categoryText, {marginLeft: 20}]}>
          {props.route.params.categoryTitle}
        </Text>
      </View>
      <InputWithoutLabel
        placeholder={'Task'}
        onChangeText={text => onTitleChange(props, text)}
      />
      <TouchableOpacity onPress={showDatepicker} style={styles.dateTimeBtn}>
        <Text style={styles.dateTimeBtnText}>{dateText}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showTimepicker} style={styles.dateTimeBtn}>
        <Text style={styles.dateTimeBtnText}>{timeText}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={event => {
            mode === 'date'
              ? date => {
                  onDateChange(props, date);
                  onChange(event, date);
                }
              : time => {
                  onTimeChange(props, time);
                  onChange(event, time);
                };
          }}
        />
      )}
      <Button
        backgroundColor={'#1AB7A7'}
        textColor={'#FFF'}
        borderColor={'transparent'}
        onPress={() => onCreateTask(props)}>
        Create
      </Button>
    </AppWrapper>
  );
};

const onTitleChange = (props, task_title) => {
  console.log('Task Title', task_title);
  props.titleChanged(task_title);
};

const onDateChange = (props, task_date) => {
  console.log('Task Date', {task_date});
  props.dateChanged(task_date);
};

const onTimeChange = (props, task_time) => {
  console.log('Task Time', task_time);
  props.dateChanged(task_time);
};

const onCreateTask = props => {
  console.log('onCreateTask pressed');
  const {task_title, task_date, task_time} = props;
  console.log(task_title + ' ' + task_date + ' ' + task_time);
};

const mapStateToProps = state => {
  console.log('Map State to Props', state);
  return {
    task_title: state?.tasks?.task_title,
    task_time: state?.tasks?.task_time,
    task_date: state?.tasks?.task_date,
  };
};

const styles = {
  containerCategory: {
    flexDirection: 'row',
    marginRight: 10,
  },
  dateTimeBtn: {
    borderWidth: 1,
    borderColor: 'gray',
    fontWeight: 'bold',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  dateTimeBtnText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
};

export default connect(mapStateToProps, {
  addTasks,
  titleChanged,
  dateChanged,
  timeChanged,
})(CreateTaskScreen);
