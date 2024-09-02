import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsArticle } from "../../@types/type";

interface Bookmark {
  title: string;
  article: NewsArticle; 
}

interface BookmarkState {
  bookmarks: Bookmark[];
}

const initialState: BookmarkState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    setBookmarks(state, action: PayloadAction<Bookmark[]>) {
      state.bookmarks = action.payload;
    },
    addBookmark(state, action: PayloadAction<Bookmark>) {
      state.bookmarks.push(action.payload);
    },
    removeBookmark(state, action: PayloadAction<string>) {
      state.bookmarks = state.bookmarks.filter(bookmark => bookmark.title !== action.payload);

    },
  },
});

export const { setBookmarks, addBookmark, removeBookmark } = bookmarkSlice.actions;

export const selectIsBookmarked = (state: { bookmark: BookmarkState }, title: string) =>
  state.bookmark.bookmarks.some(bookmark => bookmark.title === title);

export default bookmarkSlice.reducer;
