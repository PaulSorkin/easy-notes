import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    notesList: [],
    colors: ['White', 'Blue', 'Orange', 'Red', 'Yellow', 'Purple', 'Pink', 'Green', 'Lime', 'LightGray'],
    isLoading: false,
    error: null,
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
            //notesList: action.payload,
            isLoading: false,
        }),
        makeNewNoteFailure: (state, action) => ({
            ...state,
            isLoading: false,
            error: action.payload,
        }),

    }

})

export const { getNotesListStart, getNotesListSuccess, getNotesListFailure,
makeNewNoteStart, makeNewNoteSuccess, makeNewNoteFailure } = notesReducer.actions

export default notesReducer.reducer