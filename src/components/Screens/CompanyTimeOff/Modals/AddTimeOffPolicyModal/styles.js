import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 justify-center items-center pt-10`,
  scrollView: tw`flex-1`,
  modalBody: tw`w-11/12 h-full flex-1 bg-white mb-10`,
  closeIconContainer: tw`flex-1 justify-center items-end`,
  cardHeadingContainer: tw`p-5 flex-row`,
  closePressabel: tw`w-7 h-7 justify-center items-center rounded-full`,
  cardHeadingText: tw`capitalize text-lg text-gray-500 font-extrabold`,
  line: tw`w-full h-0.5 bg-gray-100`,
  emailTextContainer: tw`ml-4 mt-4`,
  email: tw`capitalize text-gray-500 text-base`,
  emailTextInput: tw`w-11/12 h-12 border-2 border-gray-200 self-center mt-2 rounded pl-2`,
  cancelAndSubmitContainer: tw`m-4 flex-row flex-1 justify-end items-end`,
  cancelPressable: tw`w-3/12 h-12 rounded justify-center items-center`,
  submitPressable: tw`w-3/12 h-12 ml-2 rounded justify-center items-center`,
  cancelPressableText: tw`text-white capitalize text-lg`,
  pickerContainer: tw`justify-center pl-0`,
  star: tw`text-red-400`,
  dateTypeContainer: tw`ml-3 mt-2`,
  singleDayContainer: tw`flex-row`,
  singleDayText: tw`ml-2 text-gray-600 capitalize text-sm`,
  commentTextInput: tw`w-11/12 h-20 border-2 border-gray-200 self-center mt-2 rounded pl-2`,
  checkboxAndTextContainer: tw`flex-row items-center ml-2 mt-4`,
  marginTop: tw`mt-4`,
  subTitle: tw`text-xs text-gray-400 ml-4 mt-1`,
  houreTextInput: tw`w-5/12 h-12 border-2 border-gray-200 rounded pl-2 mt-4 ml-3`,
  inTextContainer: tw`pl-4 h-full pt-7`,
  hoursInputContainer: tw`flex-row items-center`,
});

export default styles;
