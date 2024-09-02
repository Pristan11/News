import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {DEVICE} from '../utils/constants';
import {COLORS} from '../utils/theme';

function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={COLORS.primaryBlue} />
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: DEVICE.height * 0.3,
    left: DEVICE.width * 0.5,
    zIndex: 999,
  },
});
