import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`w-7/12 h-64 z-10 bg-white shadow-lg absolute top-12 left-12 right-0 bottom-0 rounded mt-2`,
  line: tw`w-full h-0.5 bg-gray-100`,
  scrollView: {
    flex: 1,
  },
  flatList: {
    paddingLeft: 8,
    paddingTop: 8,
  },
  activeTextParent: {
    width: '100%',
    alignItems: 'flex-end',
  },
  activeTextContainer: {
    height: 22,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  activeText: {
    textTransform: 'capitalize',
    fontSize: 15,
    color: '#fff',
  },
  imageAndNameContainer: {
    flexDirection: 'row',
  },
  userDPImageContainer: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  userDPImage: {
    width: 62,
    height: 62,
    borderRadius: 27,
  },
  namePositionAndDepartmentContainer: {
    flexDirection: 'column',
    marginHorizontal: 15,
  },
  fistNameAndLastName: {
    fontSize: 15,
    marginVertical: 10,
    textTransform: 'capitalize',
    fontWeight: '500',
    color: '#263238',
  },
  text: {
    color: '#6c757d',
    fontSize: 12,
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
