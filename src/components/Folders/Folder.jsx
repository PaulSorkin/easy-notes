import {useAppDispatch} from "../../redux/store/store";
import {deleteFolder, getFolders} from "../../redux/store/folders-actionCreators";
import NewNote from "../Notes/NewNote";
import FolderNotes from "./FolderNotes";
import {useState} from "react";
import {getNotes} from "../../redux/store/notes-actionCreators";

const Folder = (props) => {
    const dispatch = useAppDispatch();
    const [showNotes, setShowNotes] = useState(false);
    // const [button, setButton] = useState("Watch Notes");
    if (showNotes) {
        dispatch(getNotes(props.id))
    }
    const handleClick = () => {
        setShowNotes(prevState => !prevState);
        /*
                setButton(showNotes ? "Watch Notes" : "Hide Notes");
        */
    }

    return (
        <div className={"folder_container"}>
            <div className={`folder ${props.color}`} onClick={handleClick}>
                <p>{props.name}</p>
                <p>Folder id: {props.id}</p>
                {/*<p>{props.color}</p>*/}
                <button onClick={() => dispatch(deleteFolder(props.id))}>Delete entire folder</button>
            </div>
                {showNotes && <>
                    <FolderNotes folderId={props.id} folderColor={props.color} folderName={props.name} />
                </>
                }
        </div>
    )
}

export default Folder