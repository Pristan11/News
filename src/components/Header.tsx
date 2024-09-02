import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../utils/theme';
import {commonStyles, padding} from '../styles/styles';
import Container from './Container';
import {images} from '../styles/images';
import { ROUTES } from '../utils/constants';
import { useNavigation } from '@react-navigation/native';

function Header() {
    const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: padding.horizontal,
        paddingVertical: padding.vertical,
        backgroundColor: COLORS.white,
      }}>
      <View style={commonStyles.rowSpaceBetween}>
        <View>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={commonStyles.rowSpaceBetween}>
          <View style={styles.iconBackground}>
            <Icon name="bell" size={20} color="#b3b1b1" />
          </View>
          <Container width={20} />
          <TouchableOpacity style={styles.iconBackground} onPress={()=> {
            //@ts-ignore
            navigation.navigate(ROUTES.MAIN.ROOT.SEARCH)
            }}>
            <Icon name="search" size={20} color="#b3b1b1" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  logo: {width: 120, height: 30},
  iconBackground: {
    backgroundColor: '#fbf6f5',
    borderRadius: 20,
    padding: 10,
  },
});
