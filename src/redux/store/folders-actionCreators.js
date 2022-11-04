import {
    getFoldersListFailure,
    getFoldersListStart,
    getFoldersListSuccess,
    makeNewFolderStart,
    makeNewFolderSuccess,
    makeNewFolderFailure,
    deleteFolderStart, deleteFolderSuccess, deleteFolderFailure, getFolderStart, getFolderSuccess, getFolderFailure
} from "../folders-reducer";
import {foldersAPI} from "../../api/api";

export const getFolders = () => async (dispatch) => {
    try {
        dispatch(getFoldersListStart())
        const res = await foldersAPI.getFolders()
        dispatch(getFoldersListSuccess(res.data))
    } catch (e) {
        console.error(e)
        dispatch(getFoldersListFailure(e.message))
    }
}

export const newFolder = (name, color) => async (dispatch) => {
    try {
        dispatch(makeNewFolderStart())
        const res = await foldersAPI.makeFolder(name, color)
        dispatch(makeNewFolderSuccess({name: res.data.name, color: res.data.color}))
        dispatch(getFolders())
    } catch (e) {
        console.error(e)
        dispatch(makeNewFolderFailure(e.message))
    }
}

export const deleteFolder = (folderId) => async (dispatch) => {
    try {
        dispatch(deleteFolderStart())
        const res = await foldersAPI.deleteFolder(folderId)
        dispatch(deleteFolderSuccess())
        dispatch(getFolders())
    } catch (e) {
        console.error(e)
        dispatch(deleteFolderFailure(e.message))
    }
}

export const getFolder = (folderId) => async (dispatch) => {
    try {
    dispatch(getFolderStart())
        const res = await foldersAPI.getFolder(folderId)
        dispatch(getFolderSuccess({id: res.data.id, name: res.data.name, color: res.data.color, notesCount: res.data.notesCount}))
    } catch (e) {
        console.error(e)
        dispatch(getFolderFailure(e.message))
    }
}

// Will I use this?
let fetchingFoldersList = null;
export const getExisingFolders = () => async (dispatch) => {
    try {
        if (fetchingFoldersList === null) {
            fetchingFoldersList = foldersAPI.getFolders()
        }
        const res = await fetchingFoldersList
        dispatch(getFoldersListSuccess(res.data))
        fetchingFoldersList = null
    } catch (e) {
        console.error(e)
        return null
    }
}