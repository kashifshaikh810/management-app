import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 justify-center items-center pt-10`,
  scrollView: tw`flex-1`,
  modalBody: tw`w-11/12 h-64 bg-white mb-10`,
  closeIconContainer: tw`flex-1 justify-center items-end`,
  cardHeadingContainer: tw`p-5 flex-row`,
  closePressabel: tw`w-7 h-7 justify-center items-center rounded-full`,
  cardHeadingText: tw`uppercase text-lg text-gray-500 font-extrabold`,
  line: tw`w-full h-0.5 bg-gray-100`,
  headingContainer: tw`flex-row`,
  sectionContainer: tw`mt-2 ml-3 mb-2`,
  itemCenter: tw`items-center`,
  text: tw`capitalize text-gray-600 text-base`,
});

export default styles;
