import {useAppDispatch} from "../../redux/store/store";
import {deleteFolder} from "../../redux/store/folders-actionCreators";
import styles from "./Folder.module.css"
import NewNote from "../Notes/NewNote";
import FolderNotes from "./FolderNotes";

const Folder = (props) => {

    const dispatch = useAppDispatch()

    return (
        <div className={styles.folder}>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.color}</p>
            <button onClick={() => dispatch(deleteFolder(props.id))}>Delete entire folder</button>
            <div className={styles.new_note_form}>
                <NewNote folderId={props.id} />
            </div>
            <FolderNotes folderId={props.id} />
        </div>
    )
}

export default Folder