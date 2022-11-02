import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    foldersList: {
        folders: null,
        id: null,
        name: null,
        color: null,
        notesCount: null,
        isLoading: false,
        error: null,
    }
}

export const foldersReducer = createSlice({
    name: 'folders',
    initialState,
    reducers: {
        getFoldersListStart: state => ({
            ...state, foldersList: {
                ...state.foldersList,
                isLoading: true,
            }
        }),
        getFoldersListSuccess: (state, action) => ({
            ...state, foldersList: {
                ...state.foldersList,
                folders: action.payload,
                // id: action.payload.id,
                // name: action.payload.name,
                // color: action.payload.color,
                // notesCount: action.payload.notesCount,
                isLoading: false,
                error: null,
            }
        }),
        getFoldersListFailure: (state, action) => ({
            ...state, foldersList: {
                ...state.foldersList,
                isLoading: false,
                error: action.payload,
            }
        }),
        makeNewFolderStart: state => ({
            ...state, foldersList: {
                ...state.foldersList,
                isLoading: true,
            }
        }),
        makeNewFolderSuccess: (state, action) => ({
            ...state, foldersList: {
                ...state.foldersList,
                name: action.payload.name,
                color: action.payload.color
            }
        }),
        makeNewFolderFailure: (state, action) => ({
            ...state, foldersList: {
                ...state.foldersList,
                isLoading: false,
                error: action.payload,
            }
        }),
    }
})

export const { getFoldersListStart, getFoldersListSuccess,
    getFoldersListFailure, makeNewFolderFailure,
    makeNewFolderStart, makeNewFolderSuccess } = foldersReducer.actions

export default foldersReducer.reducer