import { put, takeEvery } from 'redux-saga/effects'
import { success } from '../actions';
import { AsyncActions } from '../actionTypes';


function* workerSaga():any{
    try {
       let users = yield fetch("https://api.github.com/users");
       let data = yield users.json();
       yield put(success(data));
     } catch (e) {
        yield put({type: AsyncActions.FAILIURE, message:"error"});
     }
}

function* rootSaga(){
    yield takeEvery(AsyncActions.REQUEST_DATA,workerSaga)
}

export default rootSaga;   