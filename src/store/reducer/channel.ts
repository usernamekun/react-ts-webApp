import { ChannelAction } from "@/types/store"
export default function channelReducer(preState = {},action: ChannelAction){
  const {type,payload} = action
  switch(type){
    case 'CHANGE_SAVE':
      console.log(payload)
      return {...preState, channels: payload}
    default:
      return preState
  }
  
} 