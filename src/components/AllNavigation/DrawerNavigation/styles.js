import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  dpImage: {
    width: '45%',
    height: '80%',
    borderRadius: 60,
  },
  dpImageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    color: 'black',
    textTransform: 'capitalize',
  },
  drawerContainer: {
    flex: 1,
  },
  settingsContainer: tw`flex-1 ml-4 pb-5 mt-4`,
  settingsAndIconContainer: tw`flex-row`,
  settingsMain: tw`ml-8 flex-row`,
  settingsText: tw`text-white capitalize`,
  iconContainer: tw`w-8/12 ml-1 justify-center items-end`,
  dropDownItemsContainer: tw`flex-1 ml-12 p-5`,
  dropDownItems: tw`text-base capitalize text-white m-2`,
});

export default styles;
