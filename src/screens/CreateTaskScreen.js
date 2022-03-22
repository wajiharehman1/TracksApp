import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Styles from '../styles/Styles';
import {Button, InputWithoutLabel} from '../common';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateTaskScreen = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState(false);

  const onChange = (event, selectedDate) => {
    console.log(selectedDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    let fTime =
      'Hours: ' + tempDate.getHours() + ' | Minutes ' + tempDate.getMinutes();
    console.log('Current Date: ', fDate + ' ' + fTime);

    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setText(fDate + '  ' + fTime);
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
        <FontAwesome5 name={'circle'} size={20} color={'#676767'} solid />
        <Text style={[Styles.categoryText, {marginLeft: 20}]}>
          Category Name
        </Text>
      </View>
      <InputWithoutLabel placeholder={'Title'} />
      <InputWithoutLabel placeholder={'Notes'} />
      <TouchableOpacity onPress={showDatepicker} style={styles.dateTimeBtn}>
        <Text style={styles.dateTimeBtnText}>Set Date</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showTimepicker} style={styles.dateTimeBtn}>
        <Text style={styles.dateTimeBtnText}>Set Time</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Text>{text}</Text>
      <Button
        backgroundColor={'#1AB7A7'}
        textColor={'#FFF'}
        borderColor={'transparent'}>
        Create
      </Button>
    </AppWrapper>
  );
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

export default CreateTaskScreen;
