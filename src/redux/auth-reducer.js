import {createSlice} from "@reduxjs/toolkit";

//const SET_USER_DATA = 'easy-notes/auth/SET_USER_DATA'
const initialState = {
    authData: {
        accessToken: null,
        refreshToken: null,
        isAuth: false,
        isLoading: false,
        error: null
    },
    profileData: {
        id: null,
        username: null,
        email: null,
        isLoading: false,
        error: null
    }
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: state => ({
            ...state, authData: {
                ...state.authData,
                isLoading: true,
            }
        }),
        loginSuccess: (state, action) => ({
            ...state,
            authData: {
                ...state.authData,
                accessToken: action.payload,
                refreshToken: action.payload,
                isLoading: false,
                error: null,
            }
        }),
        loginFailure: (state, action) =>({
            ...state, authData: {
                ...state.authData,
            isLoading: false,
            error: action.payload,
            }
        }),
        loadProfileStart: state => ({
            ...state,
            profileData: {
                ...state.profileData,
                isLoading: true,
            }
        }),
        loadProfileSuccess: (state, action) => ({
            ...state,
            profileData: {
                ...state.profileData,
                id: action.payload,
                username: action.payload,
                email: action.payload,
                isLoading: false,
                error: null,
            }
        }),
        loadingProfileFailure: (state, action) => ({
            ...state,
            profileData: {
                ...state.profileData,
                isLoading: false,
                error: action.payload,
            }
        }),
        logoutSuccess: () => initialState,
    },
})

export const { loadProfileStart, loadProfileSuccess, loadingProfileFailure,
loginStart, loginSuccess, loginFailure, logoutSuccess} = authReducer.actions

export default authReducer.reducer

/*
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, username, email, login, isAuth) => (
    {type: SET_USER_DATA, payload: {id, email, login, isAuth}});




const register = async (username, email, password) => {
    let response = await authAPI.register(username, email, password);
}

export default authReducer;*/
