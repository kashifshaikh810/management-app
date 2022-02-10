import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBody: {
    width: '90%',
    height: '90%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  cardHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 20,
  },
  line: {
    width: '100%',
    height: '0.2%',
    backgroundColor: '#b3b3b3',
  },
  cardHeadingText: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  closePressabel: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#e9ecef',
  },
  reqTypeContainer: {
    marginHorizontal: 18,
    height: 35,
    justifyContent: 'center',
  },
  reqType: {
    color: '#212529',
    textTransform: 'capitalize',
  },
  pressable: {
    flexDirection: 'row',
    width: '90%',
    height: 45,
    borderWidth: 0.6,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  dropIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: 10,
  },
  dropIcon: {
    marginBottom: -13,
  },
  text: {
    marginHorizontal: 10,
  },
  star: {
    fontSize: 18,
    color: '#ff4c52',
  },
  dateRange: {
    marginHorizontal: 18,
    height: 35,
    justifyContent: 'center',
  },
  dateRangeText: {
    color: '#212529',
  },
  datePickContainer: {
    width: '100%',
  },
  fromTextInput: {
    flexDirection: 'row',
    width: '90%',
    height: 45,
    borderWidth: 0.6,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
  reviewerContainer: {
    marginHorizontal: 18,
    height: 35,
    justifyContent: 'center',
  },
  commentTextContainer: {
    marginHorizontal: 18,
    height: 35,
    justifyContent: 'center',
  },
  commentText: {
    color: '#212529',
    textTransform: 'capitalize',
  },
  commentTextInput: {
    flexDirection: 'row',
    width: '90%',
    height: 45,
    borderWidth: 0.6,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  cancelAndSendReqContainer: {
    marginVertical: 20,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cancelPressableText: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  sendReqPressable: {
    width: '51%',
    height: 50,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cancelPressable: {
    width: '51%',
    height: 50,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
  },
  browse: {
    borderLeftWidth: 0.6,
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    height: 45,
    backgroundColor: '#f8f9fa',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioIconsContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  directionRow: {
    flexDirection: 'row',
  },
  marHorizontal: {
    marginHorizontal: 5,
  },
  radioText: {
    fontSize: 14,
    color: '#263238',
    textTransform: 'capitalize',
  },
});

export default styles;
