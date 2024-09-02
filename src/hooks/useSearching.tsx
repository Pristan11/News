import {useState} from 'react';
import {getNews} from '../api/model/newsModel';
import {NewsArticle} from '../@types/type';

function useSearching() {
  const [news, setNews] = useState<NewsArticle[] | []>([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const getNewsByKeyword = async (keyword: string) => {
    setIsLoading(true);
    try {
      const response = await getNews({type: 'SEARCH', keyword: keyword});
      setNews(response.articles.filter(item => item.title !== '[Removed]'));
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };
  return {
    getNewsByKeyword,
    news,
    searchKeyword,
    setSearchKeyword,
    isLoading,
  };
}

export default useSearching;
