import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-gray-100`,
  scrollView: tw`flex-1`,
  textContainer: tw`mt-5 ml-3 mb-2`,
  text: tw`text-lg text-black uppercase font-extrabold`,
  headingContainer: tw`flex-row`,
  slash: tw`ml-1.5`,
  homeIcon: tw`ml-3`,
  headingText: tw`ml-2 text-gray-500 capitalize`,
  todoCard: tw`w-11/12 min-h-0 flex-1 m-3 self-center bg-white shadow-md`,
  line: tw`w-full h-0.5 bg-gray-100`,
  requestContainer: tw`m-2 pt-1 pb-1`,
  request: tw`text-xl capitalize text-black`,
  pressable: tw`flex-row ml-3 mt-3`,
  refineText: tw`text-black uppercase`,
  arrowIcon: tw`ml-3`,
  rowView: tw`flex-row ml-3 mb-2`,
  columnView: tw`flex-col mb-2 mt-1`,
  allHeadingText: tw`text-black capitalize`,
  viewDetailsPressable: tw`flex-1 justify-center items-center rounded-xl`,
  cancelPressableText: tw`text-xs text-white capitalize p-3`,
});

export default styles;
