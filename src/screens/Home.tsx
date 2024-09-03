import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Header from '../components/Header';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NewsSlider from '../components/home/NewsSlider';
import Categories from '../components/home/category/Categories';

function Home() {
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
      <Header />
      <NewsSlider />
      <Categories viewAllButton={true} />
    </SafeAreaView>
  );
}

export default Home;
