import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-gray-100 pb-5`,
  scrollView: tw`flex-1`,
  textContainer: tw`mt-5 ml-5 mb-2`,
  text: tw`text-lg text-black uppercase font-extrabold`,
  headingContainer: tw`flex-row`,
  slash: tw`ml-1.5`,
  homeIcon: tw`ml-5`,
  headingText: tw`ml-2 text-gray-500 capitalize`,
  card: tw`w-11/12 min-h-0 flex-1 m-3 ml-5 bg-white shadow-md`,
  heading: tw`p-3 ml-2 mt-2 uppercase text-sm font-extrabold text-gray-600`,
  line: tw`w-full h-0.5 bg-gray-100 mt-2`,
  primaryText: tw`text-black text-base capitalize p-3 ml-2`,
  primaryHoverText: tw`text-black text-base capitalize p-3 ml-2`,
  box: tw`w-10 h-10 rounded ml-5`,
  smallLine: tw`ml-5 mb-4 w-10/12 mt-4`,
  cancelPressable: tw`w-11/12 ml-5 h-12 rounded justify-center items-center bg-red-500`,
  cancelPressableText: tw`text-white capitalize text-base`,
});

export default styles;
