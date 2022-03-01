import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 items-center`,
  modalBody: tw`h-full w-11/12 flex-1 bg-white mb-5`,
  newListHeading: tw`m-4`,
  line: tw`w-full h-0.5 bg-gray-100 mt-2`,
  newListText: tw`capitalize font-extrabold text-2xl`,
  contentContainer: tw`m-5`,
  categoryButtonsContainer: tw`flex-row`,
  categoryPressable: tw`w-6/12 h-12 rounded-xl mt-1 justify-center items-center`,
  categoryText: tw`text-white capitalize`,
});

export default styles;
