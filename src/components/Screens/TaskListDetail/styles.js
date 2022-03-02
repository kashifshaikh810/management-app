import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-gray-100`,
  scrollView: tw`flex-1`,
  textContainer: tw`mt-5 ml-5 mb-2`,
  text: tw`text-lg text-black uppercase font-extrabold`,
  headingContainer: tw`flex-row`,
  slash: tw`ml-1.5`,
  homeIcon: tw`ml-5`,
  headingText: tw`ml-2 text-gray-500 capitalize`,
  addPressableContainer: tw`w-11/12 h-12 justify-center items-end m-2`,
  addPressable: tw`w-4/12 mt-3 h-10 justify-center items-center rounded-xl ml-2`,
  addPressableText: tw`capitalize`,
  card: tw`bg-white h-24 w-11/12 self-center mt-7 p-8`,
  heading: tw``,
  line: tw`w-full h-0.5 bg-gray-100 mt-2`,
  desc: tw`mt-1`,
  todoCard: tw`bg-white h-full w-11/12 self-center flex-1 mt-10 p-8 mb-4`,
  iconsContainer: tw`flex-1 justify-end items-end`,
  icon: tw`w-6 h-6 justify-center items-center rounded-xl ml-2`,
});

export default styles;
