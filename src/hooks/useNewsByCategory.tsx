import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNewsData} from '../redux/slices/news';
import {AppDispatch, RootState} from '../redux/store';
import { NewsArticle } from '../@types/type';

const useNewsByCategory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {allCategoryNews, loading, error} = useSelector(
    (state: RootState) => state.news,
  );
let filteredNews = allCategoryNews.filter((item: NewsArticle) => item.title !== '[Removed]');
  const fetchDataByCategory = useCallback(async (forceFetch = false,type: "CATEGORY"|"ALL_CATEGORY", category?: string) => {
    if (forceFetch || (!loading && !allCategoryNews.length)) {
        if(category) {
            console.log("category called, ", category)
             dispatch(fetchNewsData({type: 'CATEGORY', category: category}));
        }else{
            console.log("all category called, ", category)

             dispatch(fetchNewsData({type: 'ALL_CATEGORY'}));

        }
    }
  }, []);

  useEffect(() => {
    fetchDataByCategory(false, "ALL_CATEGORY");
  }, []);

  return {
    filteredNews,
    loading,
    error,
    refetch: () => fetchDataByCategory(true, "ALL_CATEGORY"),
    fetchDataByCategory
  };
};

export default useNewsByCategory;
