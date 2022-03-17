import { takeEvery, put, call, take } from 'redux-saga/effects'
import { load } from '../redux/loading/todoTypes'
import { loadingSuccess, loadingError } from '../redux/loading/todoActions'
import { getTodoList } from '../api'

export function* handleTodoLoad(){
  try{
    const todos = yield call(getTodoList)
    console.log(todos)
    yield put(loadingSuccess(todos))

  }catch(error){
    yield put(loadingError(error.toString()));
  }
}

export default function* watchTickerLoad() {
  yield takeEvery(load.LOADING, handleTodoLoad)
}