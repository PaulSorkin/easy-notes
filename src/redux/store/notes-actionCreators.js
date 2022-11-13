import {
    deleteNoteFailure,
    deleteNoteStart, deleteNoteSuccess,
    getNotesListFailure,
    getNotesListStart,
    getNotesListSuccess,
    makeNewNoteFailure,
    makeNewNoteStart,
    makeNewNoteSuccess, moveNoteFailure, moveNoteStart, moveNoteSuccess, setCurrentFolder
} from "./notes-reducer";
import {foldersAPI, notesAPI} from "../../api/api";

export const getNotes = (folderId) => async (dispatch) => {
    try {
        dispatch(getNotesListStart())
        const res = await foldersAPI.getNotes(folderId)
        dispatch(getNotesListSuccess(res.data))
        dispatch(setCurrentFolder(folderId))
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
    } catch (e) {
        console.error(e)
        dispatch(makeNewNoteFailure(e.message))
    }
}

export const deleteNote = (noteId, folderId) => async (dispatch) => {
    try {
        dispatch(deleteNoteStart())
        const res = await notesAPI.deleteNote(noteId)
        dispatch(deleteNoteSuccess())
        dispatch(getNotes(folderId))
    } catch (e) {
        console.error(e)
        dispatch(deleteNoteFailure(e.message))
    }
}

export const moveNote = (noteId, folderId) => async (dispatch) => {
    try {
        dispatch(moveNoteStart())
        const res = await notesAPI.moveNote(noteId, folderId)
        dispatch(moveNoteSuccess())
    } catch (e) {
        console.error(e)
        dispatch(moveNoteFailure(e.message))
    }
}