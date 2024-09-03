import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import {padding} from '../styles/styles';
import Container from '../components/Container';
import SearchComponent from '../components/searching/SearchComponent';
import SearchList from '../components/searching/SearchList';
import useSearching from '../hooks/useSearching';
import {COLORS} from '../utils/theme';

function SearchScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: COLORS.white,
  };

  const {getNewsByKeyword, searchKeyword, setSearchKeyword, isLoading, news} =
    useSearching();
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        backgroundColor={COLORS.white}
      />
      <View>
        <Container height={30} />
        <View
          style={{
            paddingVertical: padding.vertical,
            paddingHorizontal: padding.horizontal,
            backgroundColor: COLORS.white,
          }}>
          <SearchComponent
            getNewsByKeyword={() => getNewsByKeyword(searchKeyword)}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            isLoading={isLoading}
          />
        </View>

        <SearchList news={news} />
      </View>
    </SafeAreaView>
  );
}

export default SearchScreen;
