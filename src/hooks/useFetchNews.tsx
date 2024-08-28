import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNewsData} from '../redux/slices/news';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch, RootState} from '../redux/store';

const useFetchNews = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {newsData, loading, error} = useSelector(
    (state: RootState) => state.news,
  );

  useEffect(() => {
    const fetchData = async (id: any) => {
      const netInfo = await NetInfo.fetch();
      if (netInfo.isConnected) {
        console.log('api is called');
        dispatch(fetchNewsData());
      } else {
        const cachedData = await AsyncStorage.getItem(`/users/${id}`);
        if (cachedData) {
          dispatch(fetchNewsData.fulfilled(JSON.parse(cachedData), '', id));
        } else {
          console.error('No data available offline');
        }
      }
    };

    fetchData('id');
  }, [dispatch]);

  return {newsData, loading, error};
};

export default useFetchNews;
