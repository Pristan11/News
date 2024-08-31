import React  from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import { NewsArticle } from '../../@types/type';
import { keyExtractor } from '../../utils/functions';
import SlidesItem from './SlidesItem';

type NewsSliderType = {
    data : NewsArticle[] | []
}
function NewsSlider({data}: NewsSliderType) {

  return (
      <SwiperFlatList
        autoplayLoopKeepAnimation={false}
        autoplay
        numColumns={1}
        autoplayDelay={3}
        autoplayLoop
        index={1}
        data={data}
        renderItem={SlidesItem}
        keyExtractor={keyExtractor}
      />
  );
}

export default NewsSlider;
