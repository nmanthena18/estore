import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import {watcherBookSaga} from './book'

export default function* rootSaga() {
    yield all([
      watcherBookSaga(),
    ]);
 }