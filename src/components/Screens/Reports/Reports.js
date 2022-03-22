import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import ReportsMarkup from './ReportsMarkup';

const Reports = props => {
  useEffect(() => {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
    ]);
  }, []);

  return <ReportsMarkup {...props} />;
};

export default Reports;
