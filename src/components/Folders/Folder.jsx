import {useAppDispatch} from "../../redux/store/store";
import {deleteFolder, getFolders} from "../../redux/store/folders-actionCreators";
import NewNote from "../Notes/NewNote";
import FolderNotes from "./FolderNotes";
import {useState} from "react";
import {getNotes} from "../../redux/store/notes-actionCreators";
import NotesPage from "../NotesPage";

const Folder = (props) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(getNotes(props.id))
    }

    return (
        // <div className={"folder_container"}>
            <div className={`folder ${props.color}`} onClick={handleClick}>
                <p>{props.name}</p>
                <p>Folder id: {props.id}</p>
                {/*<p>{props.color}</p>*/}
                <button onClick={() => dispatch(deleteFolder(props.id))}>Delete entire folder</button>
            </div>

/*
                {showNotes && <>
                    <FolderNotes folderId={props.id} folderColor={props.color} folderName={props.name} />
                    <NotesPage folderId={props.id} folerColor={props.color} folderName={props.name} showNotes={showNotes}/>
                </>
                }
*/

        // </div>
    )
}

export default Folder