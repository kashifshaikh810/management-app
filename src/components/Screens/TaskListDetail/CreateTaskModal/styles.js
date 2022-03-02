import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 justify-center items-center`,
  modalBody: tw`h-full w-11/12 flex-1 bg-white mb-5 rounded-xl`,
  newListHeading: tw`m-4`,
  line: tw`w-full h-0.5 bg-gray-100 mt-2`,
  newListText: tw`capitalize font-extrabold text-2xl`,
  contentContainer: tw`m-5`,
  categoryButtonsContainer: tw`flex-row mr-3`,
  categoryPressable: tw`w-6/12 h-12 rounded-xl mt-1 justify-center items-center`,
  categoryText: tw`text-white capitalize`,
  textInputContainer: tw`mt-2`,
  star: tw`text-red-800 text-xl`,
  textInputText: tw`text-gray-500 capitalize`,
  textInput: tw`w-full h-12 border-2 border-gray-200 rounded-xl mt-2`,
  desTextInput: tw`w-full h-64 border-2 border-gray-200 rounded-xl mt-2`,
  pressablesContainer: tw`flex-row flex-1 justify-end items-start`,
  cancelPressable: tw`w-4/12 h-11 justify-center items-center rounded-xl`,
  addNewListPressable: tw`w-5/12 h-11 justify-center items-center ml-2 mr-5 rounded-xl`,
  cancelPressableText: tw`text-xl text-white capitalize`,
});

export default styles;
