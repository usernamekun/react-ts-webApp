import { getChannelsList } from '../../utils/index';
import { RootThunkAction } from '../../types/store';
export const getChannels = (): RootThunkAction => {
  return async (dispatch) => {
    const {data:{channels}} = await getChannelsList()
    dispatch({
      type: 'CHANGE_SAVE',
      payload: channels
    })
  }
}