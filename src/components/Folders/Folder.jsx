import {useAppDispatch} from "../../redux/store/store";
import {deleteFolder} from "../../redux/store/folders-actionCreators";
import styles from "./Folder.module.css"
import NewNote from "../Notes/NewNote";
import FolderNotes from "./FolderNotes";
import {useState} from "react";
import {getNotes} from "../../redux/store/notes-actionCreators";

const Folder = (props) => {
    const dispatch = useAppDispatch();
    const [showNotes, setShowNotes] = useState(false);
    const [button, setButton] = useState("Look Notes");
    if (showNotes) {
        dispatch(getNotes(props.id))
    }
    const handleClick = () => {
        setShowNotes(prevState => !prevState);
        setButton(showNotes ? "Look Notes" : "Hide Notes");
    }

    return (
        <div className={styles.folder}>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.color}</p>
            <button onClick={() => dispatch(deleteFolder(props.id))}>Delete entire folder</button>
            <div className={styles.new_note_form}>
                <NewNote folderId={props.id} />
            </div>
            <button onClick={handleClick}>{button}</button>
            {showNotes && <FolderNotes folderId={props.id}/>}
        </div>
    )
}

export default Folder