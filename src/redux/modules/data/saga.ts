import {
    take,
    put,
    call,
    fork,
    all
} from 'redux-saga/effects';

import {
    GET_USER_DATA,
    fetchDataActionCreators
} from './actions';

export function* getUserData({ payload }: any) {
    try {
        // const response = yield call(App_Service, { url, method: 'GET' });

        // if (response.result === 'ok') {
        //     yield put(fetchDataActionCreators.getFacebookUserDataSuccess(response.data));
        // }
        yield put(fetchDataActionCreators.getUserDataSuccess({ success: payload.number }))
    } catch (e) {
        console.log(e);
    }
}

export function* watchGetUserData() {
    while (true) {
        const action = yield take(GET_USER_DATA);
        yield* getUserData(action);
    }
}

export default function* () {
    yield all([
        fork(watchGetUserData),
    ]);
}