import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    elevation: 5,
    flexDirection: 'row',
  },
  inputContainer: {
    width: '60%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  flagImageContainer: {
    width: '25%',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flagImage: {
    width: 30,
    height: 30,
  },
  bellIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIconContainer: {
    width: '10%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  closeIconContainer: {flex: 1, alignItems: 'flex-end'},
});

export default styles;
