import React, {useState} from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {InputWithoutLabel} from '../common/InputWithoutLabel';
import {Button, CustomModal} from '../common';
import AppWrapper from '../components/AppWrapper';
import {useNavigation} from '@react-navigation/native';
import Styles from '../styles/Styles';
import {
  titleChanged,
  colorChanged,
  addCategory,
  categoryUpdate,
} from '../actions/CategoryActions';
// import {ColorPicker} from 'react-native-color-picker';

const CreateCategoryScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryColor, setCategoryColor] = useState('gray');
  const navigation = useNavigation();
  return (
    <AppWrapper headerText={'New Category'}>
      <View style={stylesLocal.rowContainer}>
        <Text style={Styles.categoryText}>Select a color</Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <FontAwesome5 name={'circle'} size={20} color={categoryColor} solid />
        </TouchableOpacity>
      </View>
      <InputWithoutLabel
        placeholder={'Category title'}
        onChangeText={text => onTitleChange(props, text)}
      />
      <Button
        backgroundColor={'#1AB7A7'}
        borderColor={'#1AB7A7'}
        textColor={'#FFF'}
        onPress={() => {
          onCategoryCreate(props);
        }}>
        Add Category
      </Button>
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginBottom: 15}}>
          Select a color for the category
        </Text>
        <ColorList props={props} onSelect={setCategoryColor} />
      </CustomModal>
    </AppWrapper>
  );
};

const ColorList = ({props, onSelect}) => {
  const categoryColors = [
    {label: 'green', value: '#66aa00'},
    {label: 'red', value: '#cd0000'},
    {label: 'blue', value: '#18b3ff'},
    {label: 'yellow', value: '#ffbf00'},
  ];

  return (
    <View
      style={{
        alignContent: 'space-around',
      }}>
      <FlatList
        data={categoryColors}
        renderItem={({item}) => {
          // console.log('item in cc', item);
          return (
            <TouchableOpacity
              style={{marginRight: 15}}
              onPress={() => {
                // console.log('Color Pressed', item.label);
                onSelect(item.value);
                onColorChange(props, item.value);
              }}>
              <FontAwesome5
                name={'circle'}
                size={20}
                color={item.value}
                solid
              />
            </TouchableOpacity>
          );
        }}
        horizontal
      />
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  backArrowBtn: {
    marginHorizontal: 20,
  },
  headerText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    category_title: state?.category?.category_title,
    category_color: state?.category?.category_color,
  };
};

const onCategoryCreate = props => {
  const {category_title, category_color} = props;
  props.addCategory({category_title, category_color});
};

const onTitleChange = (props, text) => {
  console.log('onTitleChange function', text);
  props.titleChanged(text);
};

const onColorChange = (props, color) => {
  console.log('onColorChange function', color);
  props.colorChanged(color);
};

export default connect(mapStateToProps, {
  titleChanged,
  colorChanged,
  addCategory,
  categoryUpdate,
})(CreateCategoryScreen);
