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
  card: tw`w-5/12 h-56 m-3 ml-5 mr-1 mb-4 justify-center items-center shadow-md`,
  cardImage: tw`p-2`,
  itemNameContainer: tw`p-2`,
  itemName: tw`text-lg text-center font-normal text-black capitalize`,
});

export default styles;
