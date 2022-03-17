import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2E4670',
    flex: 1,
  },
  mainContainerLight: {
    backgroundColor: '#FFF',
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
  logoStyle: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  headerStyle: {
    color: '#2E4670',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  headerStyleLight: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
  textStyleGrey: {
    color: 'gray',
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default styles;
