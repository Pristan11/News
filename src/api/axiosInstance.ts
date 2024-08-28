import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../utils/constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
  async response => {
    try {
      await AsyncStorage.setItem(
        response.config.url!,
        JSON.stringify(response.data),
      );
    } catch (error) {
      console.error('Failed to save data to AsyncStorage:', error);
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
