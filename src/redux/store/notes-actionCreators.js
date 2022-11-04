import {
    getNotesListFailure,
    getNotesListStart,
    getNotesListSuccess, makeNewNoteFailure,
    makeNewNoteStart,
    makeNewNoteSuccess
} from "./notes-reducer";
import {foldersAPI, notesAPI} from "../../api/api";
import {getFolder} from "./folders-actionCreators";

export const getNotes = (folderId) => async (dispatch) => {
    try {
        dispatch(getNotesListStart())
        const res = await foldersAPI.getNotes(folderId)
        dispatch(getNotesListSuccess(res.data))
    } catch (e) {
        console.error(e)
        dispatch(getNotesListFailure(e.message))
    }
}

export const postNewNote = (folderId, title, content, color) => async (dispatch) => {
    try {
        dispatch(makeNewNoteStart())
        const res = await foldersAPI.makeNote(folderId, title, content, color)
        dispatch(makeNewNoteSuccess())
        dispatch(getNotes(folderId))
        dispatch(getFolder(folderId))
    } catch (e) {
        console.error(e)
        dispatch(makeNewNoteFailure(e.message))
    }
}