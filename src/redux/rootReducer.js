import { combineReducers } from 'redux';
import todoReducer from './loading/todoReducer';


const rootReducer = combineReducers({
  isTodos : todoReducer,
})

export default rootReducer;