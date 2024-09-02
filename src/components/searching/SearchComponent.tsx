import React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchInput from './SearchInputField';
import {DEVICE} from '../../utils/constants';
import Loading from '../Loading';

type SearchComponentType = {
  getNewsByKeyword: (word: string) => void;
  searchKeyword: string;
  setSearchKeyword: (word: string) => void;
  isLoading: boolean;
};

const SearchComponent = React.memo(
  ({
    getNewsByKeyword,
    searchKeyword,
    setSearchKeyword,
    isLoading,
  }: SearchComponentType) => {
    return (
      <View>
        <SearchInput
          onIconPress={() => getNewsByKeyword(searchKeyword)}
          onChangeText={setSearchKeyword}
          value={searchKeyword}
        />
        {isLoading && <Loading />}
      </View>
    );
  },
);

export default SearchComponent;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: DEVICE.height * 0.2,
  },
});
