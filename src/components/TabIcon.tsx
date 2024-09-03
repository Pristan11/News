import * as React from 'react';
import {View} from 'react-native';
import {COLORS} from '../utils/theme';
import AndDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
type IconType = {
  name: string;
  focused?: any;
  IconType?: 'AndDesign' | 'Ionicons' | undefined;
};

export const TabIcon = ({name, focused, IconType}: IconType) => {
  return (
    <View>
      {IconType == 'AndDesign' && (
        <AndDesignIcon
          color={focused ? COLORS.textBlack : COLORS.textBlack}
          name={name}
          size={24}
        />
      )}
      {IconType == 'Ionicons' && (
        <Ionicons
          color={focused ? COLORS.textBlack : COLORS.desGray}
          name={name}
          size={24}
        />
      )}
      {IconType == undefined && (
        <Icon
          color={focused ? COLORS.textBlack : COLORS.desGray}
          name={name}
          size={24}
        />
      )}
    </View>
  );
};
