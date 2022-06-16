import { combineReducers } from "redux";
import channelReducer from "./channel";
import articleReducer from './Article'
export default combineReducers({
  channelReducer,
  articleReducer
})