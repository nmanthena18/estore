import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import {GET_BOOKS} from '../actions/index'
import {getBooksFulfilled,getBooksFailed} from '../actions/book'
// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherBookSaga() {
    yield takeLatest(GET_BOOKS+"_INIT", workerBookSaga);
  }
  
  function fetchBooks() {
    return axios({
      method: "get",
      url: process.env.REACT_APP_API + "/books"
    });
  }
  
  function* workerBookSaga() {
    try {
      const response = yield call(fetchBooks);
      const books = response.data;
      yield put(getBooksFulfilled(books));
    
    } catch (error) {
      yield put(getBooksFulfilled(error));
    }
  }