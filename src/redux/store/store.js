import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../auth-reducer";
import {useDispatch} from "react-redux";
import {logger} from "redux-logger/src";



export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : [])),
})

export const useAppDispatch = useDispatch