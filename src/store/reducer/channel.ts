import { ChannelAction } from "@/types/store"
import { ChannelItem } from '../../types/data';
export interface IState {
  channels: ChannelItem[],
  active: number
}
const initState: IState = {
  channels: [],
  // 高亮标识
  active: 0
}
export default function channelReducer(preState = initState,action: ChannelAction): IState{
  switch(action.type){
    case 'CHANGE_SAVE':
      return {...preState, channels: action.payload, active: action.payload[0].id}
    case 'CHANGE_ACTIVE':
      return {
        ...preState,active:action.id
      }
    default:
      return preState
  } 
} 