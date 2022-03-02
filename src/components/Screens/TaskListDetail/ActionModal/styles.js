import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  modalContent: tw`bg-white`,
  modalPressables: tw`w-40 h-40 justify-around items-center bg-white border-2 border-gray-200`,
  modalPressable: tw`flex-1 justify-center items-center`,
  pressable: tw`w-full h-10 justify-center items-center`,
});

export default styles;
