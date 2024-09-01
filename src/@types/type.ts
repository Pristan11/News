import {  NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";

export type _type ={
    ALL: {type: 'ALL'},
    CATEGORY: {category: string | undefined, type: 'CATEGORY'},
    SEARCH: {keyword: string | undefined, type: 'SEARCH'},
    ALL_CATEGORY :{type: 'ALL_CATEGORY'}
  }
 export type paramsType = _type["ALL"] | _type["CATEGORY"] | _type["SEARCH"] | _type["ALL_CATEGORY"];
  
 export interface NewsArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}



export type ScreenProp = {
  navigation: NavigationProp<
    ParamListBase,
    string,
    string | undefined,
    any,
    any,
    any
  >;
  route: RouteProp<any>;
};