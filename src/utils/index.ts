import requests from "./request";
import { ChannelItem, ArticleItem } from '../types/data';

// export const getChannels = () => {
//   return requests({
//     url: 'channels', method: 'get'
//   })
// }
// export const getChannels = () => requests({
//   url: 'channels', method: 'get'
// })
// 或者
export const getChannelsList = () => requests.get<{channels: ChannelItem[] }>('channels');
export const getArticleList = (id: number, time: number) => requests.get<{ results: ArticleItem[] }>(`articles?channel_id=${id}&timestamp=${time}`)