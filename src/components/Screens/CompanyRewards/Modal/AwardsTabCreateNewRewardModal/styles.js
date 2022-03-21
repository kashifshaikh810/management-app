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
  rewardTextContainer: tw`ml-4 mt-4`,
  reward: tw`capitalize text-gray-500 text-base`,
  rewardTextInput: tw`w-11/12 h-12 border-2 border-green-400 self-center mt-2 rounded pl-2`,
  cancelAndSubmitContainer: tw`m-4 flex-row flex-1 justify-end items-end`,
  cancelPressable: tw`w-3/12 h-12 rounded justify-center items-center`,
  submitPressable: tw`w-3/12 h-12 ml-2 rounded justify-center items-center`,
  cancelPressableText: tw`text-white capitalize text-lg`,
  pickerContainer: tw`justify-center pl-0`,
  star: tw`text-red-500`,
  descriptionTextInput: tw`w-11/12 h-20 border-2 border-green-400 self-center mt-2 rounded pl-2`,
  uploadNewImagePressable: tw`w-6/12 h-12 ml-2 rounded justify-center items-center self-center mt-4 mr-2`,
  svgImageContainer: tw`w-40 h-40 shadow self-center mt-4 justify-center items-center rounded`,
  newRewardImage: tw`w-32 h-32`,
});

export default styles;
