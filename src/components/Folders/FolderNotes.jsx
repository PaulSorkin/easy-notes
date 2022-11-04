import {useAppDispatch} from "../../redux/store/store";
import {getNotes} from "../../redux/store/notes-actionCreators";
import {useSelector} from "react-redux";
import Note from "../Notes/Note";
import {useEffect} from "react";

const FolderNotes = (props) => {
    const dispatch = useAppDispatch()
    //dispatch(getNotes(props.folderId))
    const notes = useSelector(state => state.notes.notesList)
    useEffect(() => {
        dispatch(getNotes(props.folderId));
    }, [dispatch]);

    return (
        <div>
            <h2>Notes in the folder</h2>
            {notes.map(e => <Note key={e.id} id={e.id} title={e.title}
                                  content={e.content} color={e.color}
                                  created={e.created} updated={e.updated} />)}
        </div>
    )
}

export default FolderNotes