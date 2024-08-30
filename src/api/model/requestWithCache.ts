import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../axiosInstance';
import { AxiosResponse } from 'axios';

interface CustomAxiosRequestConfig extends Record<string, any> {
  cached?: boolean;
}

export const requestWithCache = async (url: string): Promise<AxiosResponse<any>> => {
  const netInfo = await NetInfo.fetch();
  
  if (!netInfo.isConnected) {
    const cachedData = await AsyncStorage.getItem(url);
    if (cachedData) {
      return {
        data: JSON.parse(cachedData),
        status: 200,
        statusText: 'OK',
        headers: {},
        config: { url, cached: true } as CustomAxiosRequestConfig,
        request: {},
      } as AxiosResponse<any>;
    } else {
      throw new Error('No internet connection and no cached data available.');
    }
  }

  const response = await axiosInstance.get(url);
  return response;
};
