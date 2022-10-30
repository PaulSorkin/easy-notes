import {
    loadingProfileFailure,
    loadProfileStart,
    loadProfileSuccess,
    loginFailure,
    loginStart,
    loginSuccess
} from "./auth-reducer";
import {accountAPI} from "../api/api";
import {store} from "./store/store";
import {isTokenExpired} from "../utils/jwt";

export const loginUser = (data) => async (dispatch) => {
    try {
        dispatch(loginStart())

        const res = await accountAPI.login(data)
        dispatch(loginSuccess({accessToken: res.data.accessToken, refreshToken: res.data.refreshToken}))
        dispatch(getProfile())
    } catch (e) {
        console.error(e)
        dispatch(loginFailure(e.message))
    }
}

// TODO if I really need it
//export const logoutUser = () => {}

export const getProfile = () => async (dispatch) => {
    try {
        dispatch(loadProfileStart())
        const res = await accountAPI.user()
        dispatch(loadProfileSuccess({id: res.data.id, username: res.data.username, email: res.data.email}))
    } catch (e) {
        console.error(e)
        dispatch(loadingProfileFailure(e.message))
    }
}

// to prevent race condition
let refreshTokenRequest = null;

export const getAccessToken = () => async (dispatch) => {
    try {
        const accessToken = store.getState().auth.authData.accessToken
        const refreshToken = store.getState().auth.authData.refreshToken

        if (!accessToken || isTokenExpired(accessToken)) {
            if (refreshTokenRequest === null) {
                refreshTokenRequest = accountAPI.refreshToken()
            }
            const res = await refreshTokenRequest
            refreshTokenRequest = null

            dispatch(loginSuccess({accessToken: res.data.accessToken, refreshToken: res.data.refreshToken}))

            return {accessToken: res.data.accessToken, refreshToken: res.data.refreshToken}
        }
        return ({accessToken, refreshToken})
    } catch (e) {
        console.error(e)
        return null
    }
}