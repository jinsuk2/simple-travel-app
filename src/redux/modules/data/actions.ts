import { createAction } from 'redux-actions';

export const GET_USER_DATA = 'data/GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'data/GET_USER_DATA_SUCCESS';

export const fetchDataActionCreators = {
    getUserData: createAction(GET_USER_DATA),
    getUserDataSuccess: createAction(GET_USER_DATA_SUCCESS),
};