import { getChannelsList } from '../../utils/index';
import { RootThunkAction, ChannelAction } from '../../types/store';
export const getChannels = (): RootThunkAction => {
  return async (dispatch) => {
    const {data:{channels}} = await getChannelsList()
    dispatch({
      type: 'CHANGE_SAVE',
      payload: channels
    })
  }
}
export const changeActive = (id: number): ChannelAction => ({
  type: 'CHANGE_ACTIVE',
  id
})