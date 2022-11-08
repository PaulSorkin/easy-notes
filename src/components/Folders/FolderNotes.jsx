import {useSelector} from "react-redux";
import Note from "../Notes/Note";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../redux/store/store";
import {getNotes} from "../../redux/store/notes-actionCreators";
import {getNotesListFailure, getNotesListStart, getNotesListSuccess} from "../../redux/store/notes-reducer";
import {foldersAPI} from "../../api/api";

const FolderNotes = (props) => {
    //const notes = useSelector(state => state.notes.notesList)

    let [notes, setNotes] = useState([])
    useEffect(() => async () => {
        try {
            const res = await foldersAPI.getNotes(props.folderId)
            setNotes(res.data)
        } catch (e) {
            console.error(e)
        }
    })

    return (
        <div>
            <h2>Notes in the folder</h2>
            {notes.map(e => <Note key={e.id} id={e.id} title={e.title}
                                  content={e.content} color={e.color}
                                  created={e.created} updated={e.updated}
                                  folderId={props.folderId}/>)}
        </div>
    )
}

export default FolderNotes