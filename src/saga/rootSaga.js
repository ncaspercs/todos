import { all } from 'redux-saga/effects';

import todoSaga from '../saga/todoSaga'

export default function* rootSaga(){
  yield all([todoSaga()])
}