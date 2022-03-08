import React from 'react';
import {View, Text} from 'react-native';
import {ColorPicker, TriangleColorPicker} from 'react-native-color-picker';

const PortalSettingsMarkup = () => {
  return (
    <View style={{flex: 1}}>
      <TriangleColorPicker
        onColorSelected={color => alert(`Color selected: ${color}`)}
        style={{width: '100%', height: 200, backgroundColor: '#b3b3b3'}}
      />

      {/* <ColorPicker
        onColorSelected={color => alert(`Color selected: ${color}`)}
        style={{width: '100%', height: 200, backgroundColor: '#b3b3b3'}}
      /> */}

      {/* <Text>PortalSettingsMarkup</Text> */}
    </View>
  );
};

export default PortalSettingsMarkup;
