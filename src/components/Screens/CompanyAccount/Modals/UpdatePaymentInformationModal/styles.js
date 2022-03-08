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
  email: tw`capitalize text-gray-500 text-base`,
  star: tw`text-red-500 text-lg`,
  emailTextInput: tw`w-11/12 h-12 border-2 border-gray-200 self-center mt-2 rounded-xl pl-2`,
  billingContainer: tw`ml-4 mt-4`,
  billingText: tw`text-black font-extrabold text-lg capitalize`,
  pressable: tw`w-11/12 h-12 border-2 border-gray-200 self-center mt-2 flex-row items-center rounded-xl pl-2`,
  dropIconContainer: tw`flex-1 justify-center items-end mr-2`,
  cancelAndSubmitContainer: tw`m-4 flex-row flex-1 justify-end items-end`,
  cancelPressable: tw`w-5/12 h-12 rounded-xl justify-center items-center`,
  submitPressable: tw`w-5/12 h-12 ml-2 rounded-xl justify-center items-center`,
  cancelPressableText: tw`text-white capitalize text-lg`,
  headingContainer: tw`flex-row`,
  lockIconAndIconContainer: tw`flex-1 items-center pt-2 pl-4`,
  lockIconContainer: tw`w-16 h-16 justify-center items-center rounded-full self-center mr-4`,
  safeText: tw`text-xs flex-1 ml-2 text-gray-300`,
  paymentsCardContainer: tw`flex-1 justify-end items-end mr-5`,
  visaIcon: tw`text-gray-100`,
  Icon: tw`text-gray-100 ml-2`,
});

export default styles;
