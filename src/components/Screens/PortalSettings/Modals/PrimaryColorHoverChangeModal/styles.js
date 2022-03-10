import {Dimensions, StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 justify-center items-center pt-10`,
  scrollView: tw`flex-1`,
  modalBody: tw`w-11/12 h-full bg-white mb-10 rounded`,
  cancelAndSubmitContainer: tw`flex-row flex-1 justify-center items-center`,
  cancelPressable: tw`w-full h-8 justify-center items-center bg-red-500`,
  cancelPressableText: tw`text-white capitalize text-base`,
  colorPicker: {
    width: '100%',
    height: Dimensions.get('window').height / 1.3,
    backgroundColor: '#fff',
  },
  saveButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: Dimensions.get('window').width / 2.3,
    right: 0,
    top: Dimensions.get('window').height / 1.4,
    marginTop: 10,
  },
  saveText: tw`text-base text-white`,
});

export default styles;
