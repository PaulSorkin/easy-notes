import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    foldersList: {
        allFolders: [],
        id: null,
        name: null,
        color: null,
        notesCount: null,
        isLoading: false,
        error: null,
        colors: ['White', 'Blue', 'Orange', 'Red', 'Yellow', 'Purple', 'Pink', 'Green', 'Lime', 'LightGray']
    },
    oneFolder: {
        id: null,
        name: null,
        color: null,
        notesCount: null,
        isLoading: false,
        error: null,
    },

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
                allFolders: action.payload,
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
                color: action.payload.color,
                isLoading: false,
            }
        }),
        makeNewFolderFailure: (state, action) => ({
            ...state, foldersList: {
                ...state.foldersList,
                isLoading: false,
                error: action.payload,
            }
        }),
        deleteFolderStart: (state) => ({
            ...state, foldersList: {
                ...state.foldersList,
                isLoading: true,
            }
        }),
        deleteFolderSuccess: (state) => ({
            ...state, foldersList: {
                ...state.foldersList,
                isLoading: false,
            }
        }),
        deleteFolderFailure: (state, action) => ({
            ...state, foldersList: {
                ...state.foldersList,
                isLoading: false,
                error: action.payload,
            }
        }),
        getFolderStart: state => ({
            ...state, oneFolder: {
                ...state.oneFolder,
                isLoading: true,
            }
        }),
        getFolderSuccess: (state, action) => ({
            ...state, oneFolder: {
                ...state.oneFolder,
                id: action.payload.id,
                name: action.payload.name,
                color: action.payload.color,
                notesCount: action.payload.notesCount,
                isLoading: false,
            }
        }),
        getFolderFailure: (state, action) => ({
            ...state, oneFolder: {
                ...state.oneFolder,
                isLoading: false,
                error: action.payload,
            }
        }),
    }
})

export const {
    getFoldersListStart, getFoldersListSuccess, getFoldersListFailure,
    makeNewFolderFailure, makeNewFolderStart, makeNewFolderSuccess,
    deleteFolderStart, deleteFolderSuccess, deleteFolderFailure,
    getFolderStart, getFolderSuccess, getFolderFailure
} = foldersReducer.actions

export default foldersReducer.reducer