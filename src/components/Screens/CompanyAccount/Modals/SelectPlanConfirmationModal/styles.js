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
  emailTextInput: tw`w-11/12 h-12 border-2 border-green-400 self-center mt-2 rounded-xl pl-2 flex-row items-center`,
  titleContainer: tw`ml-4 mt-4`,
  titleText: tw`text-black font-extrabold text-lg capitalize`,
  cancelAndSubmitContainer: tw`m-4 flex-row flex-1 justify-end items-end`,
  cancelPressable: tw`w-5/12 h-12 rounded-xl justify-center items-center`,
  submitPressable: tw`w-5/12 h-12 ml-2 rounded-xl justify-center items-center`,
  cancelPressableText: tw`text-white capitalize text-lg`,
  numberOfEmployees: tw`text-gray-400 capitalize text-sm mt-1`,
  infoIcon: tw`pl-2 text-green-700`,
  itemDescription: tw`text-gray-600 capitalize text-sm mt-5`,
  itemPrice: tw`text-black capitalize font-extrabold text-2xl`,
  monthText: tw`text-gray-400 text-xs ml-1 mt-1`,
  headingContainer: tw`flex-row`,
  buttonAndPriceContainer: tw`items-end mt-3`,
  smallLine: tw`mt-10 w-11/12 self-center`,
  marginTop: tw`mt-4`,
  width: tw`w-9/12`,
  applyPressableContainer: tw`flex-1 justify-center items-end`,
  applyPressable: tw`border-l-2 border-green-400 flex-1 justify-center items-center w-11/12 rounded-r-xl`,
  applyPressableText: tw`text-center ml-2 text-base`,
});

export default styles;
