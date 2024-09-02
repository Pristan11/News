import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../components/home/category/Header';
import {COLORS} from '../utils/theme';
import BookMarkList from '../components/bookmark/BookMarkList';

function BookMark() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{backgroundColor: COLORS.white}}>
        <Header viewAllButton={false} title="Book Marks" />
        <BookMarkList />
      </View>
    </SafeAreaView>
  );
}

export default BookMark;
