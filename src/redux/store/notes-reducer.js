import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    notesList: [],
    isLoading: false,
    error: null,
    colors: ['White', 'Blue', 'Orange', 'Red', 'Yellow', 'Purple', 'Pink', 'Green', 'Lime', 'LightGray']
}

export const notesReducer = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        getNotesListStart: state => ({
            ...state,
            isLoading: true,
        }),
        getNotesListSuccess: (state, action) => ({
            ...state,
            notesList: action.payload,
            isLoading: false,
        }),
        getNotesListFailure: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload,
        }),
        makeNewNoteStart: state => ({
            ...state,
            isLoading: true,
        }),
        makeNewNoteSuccess: (state, action) => ({
            ...state,
            isLoading: false,
        }),
        makeNewNoteFailure: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload,
        }),
        deleteNoteStart: state => ({
            ...state,
            isLoading: true,
        }),
        deleteNoteSuccess: (state, action) => ({
            ...state,
            isLoading: false,
        }),
        deleteNoteFailure: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload,
        }),
        moveNoteStart: state => ({
            ...state,
            isLoading: true,
        }),
        moveNoteSuccess: (state, action) => ({
            ...state,
            isLoading: false,
        }),
        moveNoteFailure: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload,
        }),

    }

})

export const { getNotesListStart, getNotesListSuccess, getNotesListFailure,
makeNewNoteStart, makeNewNoteSuccess, makeNewNoteFailure,
deleteNoteStart, deleteNoteSuccess, deleteNoteFailure,
moveNoteStart, moveNoteSuccess, moveNoteFailure} = notesReducer.actions

export default notesReducer.reducer