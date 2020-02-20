import {
    GET_USER_DATA_SUCCESS, GET_USER_DATA
} from './actions';

export const DEFAULT = {};

export default function data(state = DEFAULT, action = {}) {
    const { type, payload }: any = action;
    switch (type) {
        case GET_USER_DATA: {
            return {
                ...state
            }
        }
        case GET_USER_DATA_SUCCESS: {
            return {
                ...state,
                user: payload.success,
                test: "test"
            };
        }
        default:
            return state;
    }
}