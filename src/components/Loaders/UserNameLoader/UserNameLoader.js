import React from 'react';
import {View} from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const UserNameLoader = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{marginHorizontal: 5}}>
        <View style={{width: 120, height: 20, borderRadius: 4}} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default UserNameLoader;
