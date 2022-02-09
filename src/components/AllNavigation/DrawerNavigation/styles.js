import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountDefaultImage: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressAbleContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  pressAble: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalPressable: {
    flex: 0.7,
    justifyContent: 'center',
    marginHorizontal: 100,
  },
  modalContent: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
  },
  modalPressables: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerList: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
