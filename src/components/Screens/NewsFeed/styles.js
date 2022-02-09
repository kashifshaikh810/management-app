import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  scrollView: {
    flex: 1,
  },
  companyNewsContainer: {
    marginHorizontal: 15,
    width: '100%',
    height: 40,
    justifyContent: 'flex-end',
  },
  companyHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#43425d',
  },
  headingContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  headingTextSlash: {
    marginHorizontal: 5,
  },
  headingText: {
    marginHorizontal: 5,
    color: '#6c757d',
    textTransform: 'capitalize',
  },
  warnHeadingContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  warnBackground: {
    width: '90%',
    height: 50,
    backgroundColor: '#8dd9e8',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warnText: {
    color: '#497179',
    fontSize: 18,
  },
});

export default styles;
