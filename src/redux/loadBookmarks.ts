import AsyncStorage from '@react-native-async-storage/async-storage';
import { setBookmarks } from './slices/bookMarkSlice';

export async function loadBookmarks(dispatch: any) {
  try {
    const bookmarksJson = await AsyncStorage.getItem('bookmarks');
    const bookmarks = bookmarksJson ? JSON.parse(bookmarksJson) : [];
    dispatch(setBookmarks(bookmarks));
  } catch (error) {
    console.error('Failed to load bookmarks from AsyncStorage:', error);
  }
}
