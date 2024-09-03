import { NewsResponse, paramsType } from "../../@types/type";
import Config from 'react-native-config';
import { requestWithCache } from "./requestWithCache";

export const getNews = async (params: paramsType): Promise<NewsResponse> => {
    try {
        let url: string;

        if (params.type === 'ALL') {
            url = `top-headlines?sources=bbc-news&apiKey=${Config.NEWS_API}`;
        } else if (params.type === 'CATEGORY') {
            url = `top-headlines?country=id&category=${params.category}&apiKey=${Config.NEWS_API}`;
        } else if (params.type === 'SEARCH') {
            url = `everything?q=${params.keyword}&apiKey=${Config.NEWS_API}`;
        } else if(params.type === 'ALL_CATEGORY') {
            url = `everything?q=Apple&from=2024-08-21&sortBy=popularity&apiKey=${Config.NEWS_API}`;
        }else{
            url = `top-headlines?country=lk&apiKey=${Config.NEWS_API}`;
        }

        const response = await requestWithCache(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching news', error);
        throw error;
    }
}
