import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';
import Config from 'react-native-config';

export const fetchNewsData = createAsyncThunk(
  'fetchNewsData',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`everything?q=Apple&from=2024-08-21&sortBy=popularity&apiKey=${Config.NEWS_API}
`);
console.log("news api",  Config.NEWS_API)
// console.log("response data", response.data, Config.NEWS_API)
      return response.data;
    } catch (error:  any) {
      console.log("news api",  Config.NEWS_API)
      console.log("response data catcg errir", error)
      return rejectWithValue(error?.response?.data || error?.message);
    }
  }
);
type initialDataType  = {
    newsData: {},
    loading: boolean,
    error: any,
  };

const initialState: initialDataType = {
    newsData: {},
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
        state.newsData = action.payload;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },

});

export default newsSlice.reducer;
