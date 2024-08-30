import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import Header from '../components/Header';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import useFetchNews from '../hooks/useFetchNews';

function Home() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {newsData, loading, error} = useFetchNews();
  console.log('news data', newsData, loading, error);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
    </SafeAreaView>
  );
}

export default Home;
