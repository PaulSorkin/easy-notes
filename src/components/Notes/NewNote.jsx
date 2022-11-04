import {useAppDispatch} from "../../redux/store/store";
import {useSelector} from "react-redux";
import * as Yup from "yup";
import {NoteForm} from "./NoteForm";
import {postNewNote} from "../../redux/store/notes-actionCreators";

const NewNote = (props) => {
    const dispatch = useAppDispatch();

    const onSubmit = (values, actions) => {
        dispatch(postNewNote(props.folderId, values.title, values.content))
        actions.resetForm();
    }

    const notesColors = useSelector(state => state.notes.colors);
    const validationSchema = Yup.object({
        title: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
        content: Yup.string()
            .max(200, 'Must be 200 characters or less'),
        color: Yup.string()
            .oneOf(
                [notesColors],
                'Invalid color'
            )
            .required('Required'),
    });

    return (
        <div>
            <h2>New Note</h2>
            <NoteForm validationSchema={validationSchema}
                      onSubmit={onSubmit} notesColors={notesColors} />
        </div>
    )
}

export default NewNote