import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 justify-center items-center pt-10`,
  scrollView: tw`flex-1`,
  modalBody: tw`w-11/12 h-full bg-white mb-10`,
  closeIconContainer: tw`flex-1 justify-center items-end`,
  cardHeadingContainer: tw`p-5 flex-row`,
  closePressabel: tw`w-7 h-7 justify-center items-center rounded-full`,
  cardHeadingText: tw`capitalize text-lg text-gray-500 font-extrabold`,
  line: tw`w-full h-0.5 bg-gray-100`,
  emailTextContainer: tw`ml-4 mt-4`,
  email: tw`capitalize text-gray-500`,
  emailTextInput: tw`w-11/12 h-12 border-2 border-gray-200 self-center mt-2 rounded-xl`,
  billingContainer: tw`ml-4 mt-4`,
  billingText: tw`text-black font-extrabold text-lg capitalize`,
  pressable: tw`w-11/12 h-12 border-2 border-gray-200 self-center mt-2 flex-row items-center rounded-xl`,
  dropIconContainer: tw`flex-1 justify-center items-end mr-2`,
  cancelAndSubmitContainer: tw`mt-5`,
  cancelPressable: tw`w-6/12`,
  cancelPressableText: tw``,
});

export default styles;
