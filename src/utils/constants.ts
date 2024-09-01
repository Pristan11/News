import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const BASE_URL = 'http://newsapi.org/v2/'

export const ROUTES = {
 MAIN: {
   HOME: 'home',
   SEARCH : 'search',
   FILTER : 'filter',
   BOOK_MARK: 'bookmark',
   NO_INTERNET: 'no-internet',
   NEWS_DETAILS: 'news-details',
  },
};
export const DEVICE = {
  width: width,
  height: height
}
export const CategoriesData = [
    {text: 'ALL', value: 'ALL'},
    {text: 'Business', value: 'Business'},
    {text: 'Sports', value: 'Sports'},
    {text: 'Technology', value: 'Technology'},
    {text: 'Health', value: 'Health'},
  ];