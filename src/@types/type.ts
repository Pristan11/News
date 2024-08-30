export type _type ={
    ALL: {type: 'ALL'},
    CATEGORY: {category: string, type: 'CATEGORY'},
    SEARCH: {keyword: string, type: 'SEARCH'}
  }
 export type paramsType = _type["ALL"] | _type["CATEGORY"] | _type["SEARCH"];
  
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
