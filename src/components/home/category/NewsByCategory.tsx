import React from 'react';
import {FlatList} from 'react-native';
import useNewsByCategory from '../../../hooks/useNewsByCategory';
import {keyExtractor} from '../../../utils/functions';
import CategoryContainer from './CategoryContainer';
import Loading from '../../Loading';

function NewsByCategory() {
  const {filteredNews, loading} = useNewsByCategory();
  if (loading) {
    return <Loading />;
  }
  return (
    <FlatList
      data={filteredNews}
      renderItem={({item, index}) => (
        <CategoryContainer item={item} index={index} />
      )}
      keyExtractor={keyExtractor}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default NewsByCategory;
