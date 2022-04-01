import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Separator from './Separator';

const WeekTaskItem = ({day, tasks}) => {
  const [expanded, setExpanded] = useState(false);
  const todayDate = new Date(Date.now()).toISOString().substring(0, 10);
  console.log('Tasks array', day + ' ' + JSON.stringify(tasks));

  return (
    <View style={styles.containerStyle}>
      <TouchableWithoutFeedback
        onPress={() => {
          setExpanded(!expanded);
        }}
        style={styles.collapseTouchable}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            flex: 1,
          }}>
          <Text style={styles.collapseTouchableText}>{day}</Text>
          <FontAwesome5
            name={expanded ? 'minus' : 'plus'}
            size={15}
            style={{position: 'absolute', right: 10, top: 10, color: '#1AB7A7'}}
          />
        </View>
      </TouchableWithoutFeedback>

      {expanded && (
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            flexDirection: 'row',
          }}>
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => item.id}
            key={Math.random()}
            listKey={(item, index) => 'T' + index}
            style={{width: '100%'}}
            scrollEnabled
            ItemSeparatorComponent={Separator}
            renderItem={({item}) => {
              const dateTime = new Date(item.task.task_datetime);
              return (
                <View>
                  <View style={styles.taskContainer}>
                    <TouchableOpacity style={styles.TOC}></TouchableOpacity>
                    <View
                      style={{
                        flex: 1,
                        paddingHorizontal: 20,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginTop: 15,
                      }}>
                      <Text style={styles.taskTextStyle}>
                        {item.task.task_title}
                      </Text>
                      <Text>
                        {dateTime.toLocaleTimeString([], {
                          hour12: true,
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                        {/* // + // '\t' + // dateTime.toLocaleDateString() + //
                        '\n'} */}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesome5 name={'trash'} size={15} color={'red'} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 10,
  },
  TOC: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'gray',
    borderRadius: 200,
    backgroundColor: '#fff',
    borderWidth: 1,
    width: '5%',
    height: '5%',
    alignSelf: 'center',
    borderColor: '#C1C1C1',
  },
  taskTextStyle: {
    color: 'black',
    marginBottom: 10,
    fontSize: 15,
  },
  taskContainer: {
    paddingHorizontal: 10,
    width: '100%',
    flexDirection: 'row',
  },
  collapseTouchable: {
    width: '100%',
  },
  collapseTouchableText: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default WeekTaskItem;
