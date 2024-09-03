import React, {useState} from 'react';
import {keyExtractor} from '../../../utils/functions';
import {FlatList, View} from 'react-native';
import {padding} from '../../../styles/styles';
import CategorySlides from './CategorySlideItem';
import {CategoriesData} from '../../../utils/constants';

function CategorySlide() {
  const [selected, setSelected] = useState(0);
  return (
    <View
      style={{
        paddingVertical: padding.vertical,
      }}>
      <FlatList
        data={CategoriesData}
        renderItem={({item, index}) => (
          <CategorySlides
            item={item}
            index={index}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        keyExtractor={keyExtractor}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default CategorySlide;
