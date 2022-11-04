import {Form, Formik} from "formik";
import {MySelect, MyTextareaInput, MyTextInput} from "../FormsControl/FormsControl";
import styles from "../FormsControl/FormsControl.module.css";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/store/store";
import * as Yup from "yup";

export const NoteForm = ({validationSchema, onSubmit, notesColors}) => {
    //const foldersColors = useSelector(state => state.folders.foldersList.colors);
    return (
        <Formik initialValues={{
            title: '',
            content: '',
            color: 'choose color'
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
                            <option key={"choose color"} value={"choose color"}>choose color</option>
                            {notesColors.map(e => <option key={e} value={e}>{e}</option>)}
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

