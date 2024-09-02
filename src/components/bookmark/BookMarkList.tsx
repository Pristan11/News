import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {keyExtractor} from '../../utils/functions';
import CategoryContainer from '../home/category/CategoryContainer';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import {NewsArticle} from '../../@types/type';

function BookMarkList() {
  const {bookmarks} = useSelector((state: RootState) => state.bookmark);
  let articles = bookmarks.map(
    (item: {title: string; article: NewsArticle}) => item.article,
  );
  return (
    <SafeAreaView>
      <View>
        <FlatList
          nestedScrollEnabled
          data={articles}
          renderItem={({item, index}) => (
            <CategoryContainer item={item} index={index} />
          )}
          keyExtractor={keyExtractor}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default BookMarkList;
