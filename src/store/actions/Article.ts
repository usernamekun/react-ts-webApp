import { getArticleList } from "@/utils"
import { RootThunkAction } from "@/types/store"
export const getArticle = (id:number, time:number):RootThunkAction => {
  return async (dispatch) => {
    const {data:{results}} = await getArticleList(id,time)
    dispatch({
      type: 'ARTICLE_SAVE',
      payload: results
    })
  }
}