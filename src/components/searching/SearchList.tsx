import React from 'react';
import {FlatList, View} from 'react-native';
import {keyExtractor} from '../../utils/functions';
import CategoryContainer from '../home/category/CategoryContainer';
import {NewsArticle} from '../../@types/type';

const SearchList = React.memo(({news}: {news: NewsArticle[] | []}) => {
  return (
    <View>
      <FlatList
        data={news}
        renderItem={({item, index}) => (
          <CategoryContainer item={item} index={index} />
        )}
        keyExtractor={keyExtractor}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
});

export default SearchList;
