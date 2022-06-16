import requests from "./request";

// export const getChannels = () => {
//   return requests({
//     url: 'channels', method: 'get'
//   })
// }
// export const getChannels = () => requests({
//   url: 'channels', method: 'get'
// })
// 或者
export const getChannelsList = () => requests.get('channels')