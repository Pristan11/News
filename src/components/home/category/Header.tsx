import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {padding, commonStyles} from '../../../styles/styles';
import {COLORS} from '../../../utils/theme';
import {ROUTES} from '../../../utils/constants';
import {useNavigation} from '@react-navigation/native';

function Header({
  viewAllButton = true,
  title,
}: {
  viewAllButton?: boolean;
  title: string;
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={commonStyles.rowSpaceBetween}>
        <Text style={styles.leftText}>{title}</Text>
        {viewAllButton && (
          <TouchableOpacity
            //@ts-ignore
            onPress={() => navigation.navigate(ROUTES.MAIN.FILTER)}>
            <Text style={styles.rightText}>View all</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  main: {
    paddingVertical: padding.vertical,
    paddingHorizontal: padding.horizontal,
    backgroundColor: COLORS.white,
  },
  leftText: {
    color: COLORS.textBlack,
    fontSize: 15,
    fontWeight: 'bold',
  },
  rightText: {
    color: COLORS.textBlack,
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
