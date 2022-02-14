import React from 'react';
import {Provider} from 'react-redux';
import StackNavigation from './src/components/AllNavigation/StackNavigation/StackNavigation';

import Store from './src/components/Redux/Store/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
