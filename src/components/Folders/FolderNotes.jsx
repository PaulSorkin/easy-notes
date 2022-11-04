import {useSelector} from "react-redux";
import Note from "../Notes/Note";

const FolderNotes = (props) => {
    const notes = useSelector(state => state.notes.notesList)

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