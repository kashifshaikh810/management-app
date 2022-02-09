import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  scrollView: {
    flex: 1,
  },
  headingContiner: {
    marginHorizontal: 12,
    width: '100%',
    height: Dimensions.get('window').height / 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#43425d',
  },
  componentHeadingContainer: {
    flexDirection: 'row',
    width: '100%',
    // height: 40,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  headingTextSlash: {
    marginHorizontal: 5,
  },
  headingText: {
    marginHorizontal: 5,
    color: '#6c757d',
  },
  whoIsOutcard: {
    elevation: 5,
    width: '92%',
    height: 200,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,
  },
  cardHeadingContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  line: {
    width: '100%',
    height: '0.2%',
    backgroundColor: '#b3b3b3',
  },
  cardHeadingText: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  cardItems: {
    marginVertical: 10,
    marginHorizontal: 2,
  },
  upcomingCard: {
    elevation: 5,
    width: '92%',
    height: 200,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,
  },
  upcomingTimeOffCard: {
    elevation: 5,
    width: '92%',
    height: 200,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,
  },
  search: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
  },
  requestsCard: {
    elevation: 5,
    width: '92%',
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,
  },
  refineTimeOff: {
    marginHorizontal: 15,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  pressableContainer: {
    marginHorizontal: 10,
  },
  dateRange: {
    width: '30%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateRangeText: {
    color: '#212529',
  },
  fromTextInput: {
    flexDirection: 'row',
    width: '42%',
    height: 45,
    borderWidth: 0.6,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
  createAccountButtonContainer: {
    marginVertical: 10,
    width: '80%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  createAccountPressableText: {
    color: '#fff',
    fontSize: 20,
  },
  createAccountPressable: {
    width: '51%',
    height: 50,
    marginHorizontal: 17,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  clearPressable: {
    width: '51%',
    height: 50,
    marginHorizontal: 17,
    borderWidth: 1,
    borderColor: '#006f44',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  addNewReq: {
    width: '70%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  addNewReqPressable: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'flex-end',
  },
  noRecordContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRecordBackground: {
    width: '70%',
    height: 50,
    backgroundColor: '#8dd9e8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  noRecord: {
    fontSize: 16,
    fontWeight: '400',
    color: '#263238',
  },
  dropIcon: {
    marginBottom: -13,
  },
  actionPressable: {
    width: '25%',
    height: 40,
    marginHorizontal: 7,
    marginVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 15,
    marginHorizontal: 3,
  },
  reqAndFromToContainer: {
    flexDirection: 'row',
  },
  reqTypeContainer: {
    marginHorizontal: 15,
  },
  reqTypeAndIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingTextContainer: {
    marginHorizontal: 10,
  },
  approvedContainer: {
    width: 70,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#13bd7c',
  },
  hoursContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  downloadContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  icon: {
    marginVertical: 2,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  approved: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  typesHeading: {
    color: '#263238',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemHeading: {
    color: '#263238',
    fontSize: 14,
  },
  download: {
    marginHorizontal: 3,
  },
  requestContainer: {
    flex: 1,
  },
  datePickContainer: {
    flexDirection: 'row',
  },
});

export default styles;
