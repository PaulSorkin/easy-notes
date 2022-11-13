import FolderNotes from "./Folders/FolderNotes";
import {useAppDispatch} from "../redux/store/store";
import {useSelector} from "react-redux";

const NotesPage = (props) => {
    const dispatch = useAppDispatch();
    const currentFolderNotes = useSelector(state => state.notes.notesList)


    return ( <>
            {props.showNotes && <>
                <FolderNotes folderId={props.folderId} folderColor={props.folderColor} folderName={props.folderName} />
            </>
            }
        </>
    )
}

export default NotesPage


// TODO delete this unused component