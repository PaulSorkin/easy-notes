import Note from "../Notes/Note";
import {useEffect, useState} from "react";
import {foldersAPI} from "../../api/api";
import {useSelector} from "react-redux";
import NewNote from "../Notes/NewNote";

const FolderNotes = (props) => {
    const notesList = useSelector(state => state.notes.notesList)

    let [notes, setNotes] = useState([])
    useEffect(() => async () => {
        try {
            const res = await foldersAPI.getNotes(props.folderId)
            setNotes(res.data)
        } catch (e) {
            console.error(e)
        }
    }, [notesList])

    return (
        <div className={`folderNotes_container ${props.folderColor}`}>
            {/*<h2>Notes in {props.folderName} folder</h2>*/}
            {notes.map(e => <Note key={e.id} id={e.id} title={e.title}
                                  content={e.content} color={e.color}
                                  created={e.created} updated={e.updated}
                                  folderId={props.folderId}/>)}
            <div className={"new_note_form"}>
                <NewNote folderId={props.folderId}/>
            </div>
        </div>
    )
}

export default FolderNotes