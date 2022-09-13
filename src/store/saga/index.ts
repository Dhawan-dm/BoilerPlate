import { put, takeEvery } from 'redux-saga/effects'
import { fetchSuccess } from '../actions';
import { AsyncActions } from '../actionTypes';


function* workerSaga():any{
    try {
       let users = yield fetch("https://api.github.com/users");
       let data = yield users.json();
       yield put(fetchSuccess(data));
     } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message:"error"});
     }
}

function* rootSaga(){
    yield takeEvery(AsyncActions.FETCH_REQUESTED,workerSaga)
}

export default rootSaga;   