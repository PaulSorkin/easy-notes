import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../auth-reducer";
import {useDispatch} from "react-redux";
import {logger} from "redux-logger/src";
import {foldersReducer} from "../folders-reducer";



export const store = configureStore({
    reducer: {
        auth: authReducer.reducer,
        folders: foldersReducer.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : [])),
})

export const useAppDispatch = useDispatch