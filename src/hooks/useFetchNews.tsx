import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNewsData} from '../redux/slices/news';
import {AppDispatch, RootState} from '../redux/store';

const useFetchNews = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {newsData, loading, error} = useSelector(
    (state: RootState) => state.news,
  );

  const fetchData = useCallback(async (forceFetch = false) => {
    if (forceFetch || (!loading && !newsData.length)) {
      dispatch(fetchNewsData({type: 'ALL'}));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    newsData,
    loading,
    error,
    refetch: () => fetchData(true),
  };
};

export default useFetchNews;
