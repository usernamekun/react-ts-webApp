import { ThunkAction } from 'redux-thunk';
import store from '@/store';
import { ChannelItem } from './data';
export type RootState = ReturnType<typeof store.getState>
export type ChannelAction = {
  type: 'CHANGE_SAVE',
  payload: ChannelItem[]
}
export type RootAction = ChannelAction
export type RootThunkAction = ThunkAction<void,RootState,unknown,RootAction>