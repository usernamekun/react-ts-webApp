import { getChannelsList } from '../../utils/index';
import { RootThunkAction, ChannelAction } from '../../types/store';
export const getChannels = (): RootThunkAction => {
  return async (dispatch) => {
    const res = await getChannelsList()
    dispatch({
      type: 'CHANGE_SAVE',
      payload: res.data.channels
    })
  }
}
export const changeActive = (id: number): ChannelAction => ({
  type: 'CHANGE_ACTIVE',
  id
})