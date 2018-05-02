import { delay } from 'redux-saga'
import { put, takeLatest, takeEvery, all, call } from 'redux-saga/effects'

export function* helloSaga() {
	console.info("hello sagas!");
}

function* incrementAsync() {
	yield console.info(1)
	yield call (delay, 1000)
	yield console.info(2)
	yield put({type: 'INCREMENT'});
	yield console.info(3)
}

export function* watchIncrementAsync() {
	console.info("right here");
	yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

export function* fetchData(action) {
   try {
   		console.info("I am going to fetch data");
      const data = yield call(Api.fetchUser, action.payload.url)
      yield put({type: "FETCH_SUCCEEDED", data})
   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

function* watchFetchData() {
  yield takeEvery('FETCH_REQUESTED', fetchData)
}

export default function* rootSaga(){
	yield all([helloSaga(), watchIncrementAsync(), watchFetchData()])
}