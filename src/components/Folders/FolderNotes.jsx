import Note from "../Notes/Note";
import {useEffect, useState} from "react";
import {foldersAPI} from "../../api/api";
import {useSelector} from "react-redux";
import NewNote from "../Notes/NewNote";
import add from "../../img/logos/add.svg"
import edit from "../../img/logos/edit.svg"

const FolderNotes = (props) => {
    const notesList = useSelector(state => state.notes.notesList);
    const currentFolderId = useSelector(state => state.notes.currentFolder);

    // let [notes, setNotes] = useState([])
    // useEffect(() => async () => {
    //     try {
    //         const res = await foldersAPI.getNotes(props.folderId)
    //         setNotes(res.data)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }, [notesList])

    return (
        <div className={`folderNotes_container ${props.folderColor}`}>
            {/*<h2>Notes in {props.folderName} folder</h2>*/}
            {notesList.map(e => <Note key={e.id} id={e.id} title={e.title}
                                  content={e.content} color={e.color}
                                  created={e.created} updated={e.updated}
                                  folderId={currentFolderId}/>)}
            <button className={"app_button"}>
                <img className={"button_logo"} src={add} alt={"add"}/>
            </button>
            <button className={"app_button"}>
                <img className={"button_logo"} src={edit} alt={"edit"}/>
            </button>
            <div className={"new_note_form"}>
                <NewNote folderId={currentFolderId}/>
            </div>
        </div>
    )
}

export default FolderNotes