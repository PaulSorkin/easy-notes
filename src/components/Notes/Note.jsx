import {useAppDispatch} from "../../redux/store/store";
import {deleteNote, moveNote} from "../../redux/store/notes-actionCreators";
import {useState} from "react";
import {useSelector} from "react-redux";
import * as Yup from "yup";
import {MoveNoteForm} from "./MoveNoteForm";
import del from "../../img/logos/delete.svg"
import move from "../../img/logos/transfer.svg"


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
        <div className={`note_container border_${props.color}`}>
            <p className={`note_heading ${props.color}`}>{props.title}</p>
            <div className={`note_content`}>
                <p>{props.content}</p>
                <div className={`note__buttons_block`}>
                    <button title={"delete"} className={"app_button"} onClick={() => dispatch(deleteNote(props.id, props.folderId))}>
                        <img className={"note__button_logo"} src={del} alt={"delete"}/>
                    </button>
                    <button title={"transfer to another folder"} className={"app_button"} onClick={avalibleFoldersClick}>
                        <img className={"note__button_logo"} src={move} alt={"delete"}/>
                    </button>
                    {/*<button onClick={avalibleFoldersClick}>{showFoldersButton}</button>*/}
                </div>
                {showFolders && <MoveNoteForm validationSchema={validationSchema}
                                              onSubmit={onSubmit}
                                              avalibleFolders={avalibleFolders}/>}
                <div className={`service_info`}>
                    <p><strong>id:</strong> {props.id}</p>
                    <p><strong>created:</strong> {props.created}</p>
                    <p><strong>updated:</strong> {props.updated}</p>
                </div>
            </div>
        </div>
    )
}

export default Note