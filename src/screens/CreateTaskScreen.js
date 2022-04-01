import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Styles from '../styles/Styles';
import {Button, InputWithoutLabel} from '../common';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {addTasks, titleChanged, dateChanged} from '../actions/TasksActions';
import {connect} from 'react-redux';

const CreateTaskScreen = props => {
  const [date, setDate] = useState(new Date(Date.now()));
  console.log('Date on render of CreateTask', date);
  const [open, setOpen] = useState(false);
  console.log('Checking props timechange', props.task_date);
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
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
        {/* <Text style={{color: 'gray'}}>{props.task_datetime}</Text> */}

        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={styles.dateTimeBtn}>
          <Text style={styles.dateTimeBtnText}>
            {date.toISOString().substring(0, 10) ===
              new Date(Date.now()).toISOString().substring(0, 10) &&
            date.toISOString()
              ? 'Today ' +
                date.toLocaleTimeString('en', {
                  timeStyle: 'short',
                  hour12: false,
                  timeZone: 'UTC',
                })
              : date.toDateString() + ' ' + date.toLocaleTimeString()}
          </Text>
        </TouchableOpacity>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            console.log('Date on save of date', date);
            onDateTimeChange(props, date);
          }}
          minimumDate={new Date(Date.now())}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <Button
          backgroundColor={'#1AB7A7'}
          textColor={'#FFF'}
          borderColor={'transparent'}
          onPress={() => onCreateTask(props)}>
          Create
        </Button>
      </AppWrapper>
    </KeyboardAwareScrollView>
  );
};

const onTitleChange = (props, task_title) => {
  console.log('Task Title', task_title);
  props.titleChanged(task_title);
};

const onDateTimeChange = (props, task_date) => {
  console.log('Task Date', {task_date});
  props.dateChanged(task_date);
};

const onCreateTask = props => {
  const {task_title, task_date} = props;
  const {categoryID, categoryTitle, categoryColor} = props.route.params;
  console.log('Task date', task_date + ' type ' + typeof task_date);
  const task_datetime = new Date(task_date).toISOString();
  props.addTasks({
    task_title,
    task_datetime,
    category_id: categoryID,
    category_title: categoryTitle,
    category_color: categoryColor,
    status: 'pending',
    index: props.route.params.index,
  });
};

const mapStateToProps = state => {
  // console.log('Task Title check', state.tasks.task_title);
  // if (state.tasks.task_title == null || state.tasks.task_title == undefined) {
  //   // set some message but where?
  // }
  return {
    task_title: state?.tasks?.task_title,
    // task_datetime: state?.tasks?.task_time,
    task_date: state?.tasks?.task_date,
    status: state?.tasks?.status,
  };
};

const styles = {
  containerCategory: {
    flexDirection: 'row',
    marginRight: 10,
  },
  dateTimeBtn: {
    borderBottomWidth: 1,
    borderColor: '#C1C1C1',
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: 'flex-start',
    marginVertical: 5,
    marginBottom: 20,
  },
  dateTimeBtnText: {
    fontSize: 15,
    color: 'gray',
  },
};

export default connect(mapStateToProps, {
  addTasks,
  titleChanged,
  dateChanged,
})(CreateTaskScreen);
