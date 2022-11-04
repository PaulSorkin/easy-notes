import {useAppDispatch} from "../../redux/store/store";
import {deleteNote} from "../../redux/store/notes-actionCreators";

const Note = (props) => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <p>id: {props.id}</p>
            <p>title: {props.title}</p>
            <p>content: {props.content}</p>
            <p>color: {props.color}</p>
            <p>created: {props.created}</p>
            <p>updated: {props.updated}</p>
            <button onClick={() => dispatch(deleteNote(props.id, props.folderId))}>Delete note</button>
        </div>
    )
}

export default Note