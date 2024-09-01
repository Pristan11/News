import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../../utils/theme';
import Header from './Header';
import CategorySlide from './categorySlide';
import NewsByCategory from './NewsByCategory';

function Categories({viewAllButton}: {viewAllButton: boolean}) {
  return (
    <View style={{backgroundColor: COLORS.white}}>
      <Header viewAllButton={viewAllButton} title="Trending Now" />
      <CategorySlide />
      <NewsByCategory />
    </View>
  );
}

export default Categories;
