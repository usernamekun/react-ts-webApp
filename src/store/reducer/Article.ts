import { ArticleAction } from '../../types/store';
import { ArticleItem } from '../../types/data';

interface IState {
  results: ArticleItem[]
}
const initState: IState = {
  results: []
}
export default function acticleReducer(preState=initState,action: ArticleAction): IState{
    switch(action.type){
      case 'ARTICLE_SAVE':
        return {
          ...preState, results: action.payload
        }
      default:
        return preState
    }
}