import React from 'react';
import {View} from 'react-native';
type containerType = {
  width?: number;
  height?: number;
};
function Container({width, height}: containerType) {
  return <View style={{width: width ?? 0, height: height ?? 0}} />;
}
export default Container;
