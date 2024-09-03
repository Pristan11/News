import React  from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import { keyExtractor } from '../../utils/functions';
import SlidesItem from './SlidesItem';
import useFetchNews from '../../hooks/useFetchNews';
import { View } from 'react-native';


function NewsSlider() {
    const {newsData} = useFetchNews();
  return (
    <View>
    {newsData && newsData.length> 0 &&
        <SwiperFlatList
        autoplayLoopKeepAnimation={false}
        autoplay
        numColumns={1}
        autoplayDelay={3}
        autoplayLoop
        index={1}
        data={newsData}
        renderItem={({item})=> <SlidesItem item={item}/>}
        keyExtractor={keyExtractor}
      />
    }
  
  </View>
    
  );
}

export default NewsSlider;
