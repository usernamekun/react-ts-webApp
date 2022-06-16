import { ThunkAction } from 'redux-thunk';
import store from '@/store';
import { ArticleItem, ChannelItem } from './data';
export type RootState = ReturnType<typeof store.getState>
export type ChannelAction =
  | {
    type: 'CHANGE_SAVE',
    payload: ChannelItem[]
  }
  | { type: 'CHANGE_ACTIVE', id: number }
export type ArticleAction = {
  type: 'ARTICLE_SAVE',
  payload: ArticleItem[]
}
export type RootAction = ChannelAction | ArticleAction
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>