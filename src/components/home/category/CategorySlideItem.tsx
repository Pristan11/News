import {TouchableOpacity, Text} from 'react-native';
import {padding} from '../../../styles/styles';
import {COLORS} from '../../../utils/theme';
import React from 'react';
import useNewsByCategory from '../../../hooks/useNewsByCategory';
import {CategoriesData} from '../../../utils/constants';

const CategorySlides = React.memo(
  ({
    item,
    index,
    selected,
    setSelected,
  }: {
    item: {text: string; value: string};
    index: number;
    selected: number;
    setSelected: (index: number) => void;
  }) => {
    const {fetchDataByCategory} = useNewsByCategory();

    return (
      <TouchableOpacity
        onPress={() => {
          setSelected(index);
          if (index == 0) {
            fetchDataByCategory(true, 'ALL_CATEGORY');
          } else {
            fetchDataByCategory(true, 'CATEGORY', item.value);
          }
        }}
        style={{
          backgroundColor:
            index == selected ? COLORS.primaryBlue : COLORS.backgroundGray,
          borderRadius: 30,
          paddingVertical: 5,
          paddingHorizontal: 20,
          marginRight: index == CategoriesData.length - 1 ? 20 : 5,
          marginLeft: index == 0 ? padding.horizontal : 0,
        }}>
        <Text
          style={{
            color: index == selected ? COLORS.white : COLORS.textBlack,
            fontWeight: 'bold',
          }}>
          {item.value}
        </Text>
      </TouchableOpacity>
    );
  },
);

export default CategorySlides;
