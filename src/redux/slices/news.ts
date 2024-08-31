import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NewsArticle,paramsType } from '../../@types/type';
import { getNews } from '../../api/model/newsModel';


export const fetchNewsData = createAsyncThunk(
  'fetchNewsData',
  async (params: paramsType, { rejectWithValue }) => {
    try {
      const response = await getNews(params);
      return response;
    } catch (error:  any) {
      return rejectWithValue(error?.response?.data || error?.message);
    }
  }
);
type initialDataType  = {
    newsData: NewsArticle[] | [],
    loading: boolean,
    error: any,
  };

const initialState: initialDataType = {
    newsData: [],
    loading: false,
    error: null,
  }
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.newsData = action.payload.articles;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },

});

export default newsSlice.reducer;
