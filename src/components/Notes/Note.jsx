import {useAppDispatch} from "../../redux/store/store";
import {deleteNote, moveNote} from "../../redux/store/notes-actionCreators";
import {useState} from "react";
import {useSelector} from "react-redux";
import * as Yup from "yup";
import {MoveNoteForm} from "./MoveNoteForm";

const Note = (props) => {
    const dispatch = useAppDispatch();
    const [showFolders, setShowFolders] = useState(false);
    const [showFoldersButton, setShowFoldersButton] = useState("Move note to");
    const existingFolders = useSelector(state => state.folders.foldersList.allFolders);
    const avalibleFolders = existingFolders.filter(e => e.id !== props.folderId);
    const avalibleFoldersClick = () => {
        setShowFolders(prevState => !prevState);
        setShowFoldersButton(showFolders ? "Move note to" : "Don't move");
    }

    const validationSchema = Yup.object({
        myAvalibleFolders: Yup.string()
            // .oneOf(
            //     [avalibleFolders],
            //     'Invalid folder'
            // )
            .required('Required'),
    });
    const onSubmit = (values, actions) => {
        dispatch(moveNote(props.id, values.myAvalibleFolders))
    }


    return (
        <div className={`note_container, ${props.color}`}>
            <p>title: {props.title}</p>
            <p>content: {props.content}</p>
            <p>id: {props.id}</p>
            <p>created: {props.created}</p>
            <p>updated: {props.updated}</p>
            <button onClick={() => dispatch(deleteNote(props.id, props.folderId))}>Delete note</button>
            <button onClick={avalibleFoldersClick}>{showFoldersButton}</button>
            {showFolders && <MoveNoteForm validationSchema={validationSchema}
                                          onSubmit={onSubmit} avalibleFolders={avalibleFolders}/>}

        </div>
    )
}

export default Note