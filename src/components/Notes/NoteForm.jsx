import {Form, Formik} from "formik";
import {MySelect, MyTextareaInput, MyTextInput} from "../FormsControl/FormsControl";
import styles from "../FormsControl/FormsControl.module.css";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/store/store";
import * as Yup from "yup";

const NoteForm = ({validationSchema, onSubmit}) => {
    const foldersColors = useSelector(state => state.folders.foldersList.colors);
    return (
        <Formik initialValues={{
            title: '',
            content: '',
            color: null
        }} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({status}) =>
                <Form>
                    <div>
                        <MyTextInput name={"title"} placeholder={"Note Title"}/>
                    </div>
                    <div>
                        <MyTextareaInput name={"content"} placeholder={"Type your note here..."}/>
                    </div>
                    <div>
                        <MySelect name="color" label={"Folder color"}>
                            {foldersColors.map(e => <option key={e} value={e}>{e}</option>)}
                        </MySelect>
                    </div>
                    {status && <div className={styles.server_error_message}>{status}</div>}
                    <div>
                        <button type={"submit"}>Save note</button>
                        <button type={"reset"}>Reset</button>
                    </div>
                </Form>
            }
        </Formik>
    )
}

const NewNote = (props) => {
    const dispatch = useAppDispatch();

    const onSubmit = (values) => {              //TODO
        dispatch()
    }

    const foldersColors = useSelector(state => state.folders.foldersList.colors);
    const validationSchema = Yup.object({
        title: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
        content: Yup.string()
            .max(200, 'Must be 200 characters or less'),
        color: Yup.string()
            .oneOf(
                [foldersColors],
                'Invalid color'
            )
            .required('Required'),
    });

    return (
        <div>
            <h2>New Note</h2>
            <NoteForm validationSchema={validationSchema} onSubmit={onSubmit} />
        </div>
    )
}

export default NewNote