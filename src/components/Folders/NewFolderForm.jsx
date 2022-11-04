import {Form, Formik} from "formik";
import {MySelect, MyTextareaInput, MyTextInput} from "../FormsControl/FormsControl";
import styles from "../FormsControl/FormsControl.module.css";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/store/store";
import * as Yup from "yup";
import {getFolders, newFolder} from "../../redux/store/folders-actionCreators";

const FolderForm = ({validationSchema, onSubmit, foldersColors}) => {
    return (
        <Formik initialValues={{
            name: '',
            color: ''
        }} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({status}) =>
                <Form>
                    <div>
                        <MyTextInput name={"name"} placeholder={"Folder Name"}/>
                    </div>
                    <div>
                        <MySelect name="color" label={"Folder color"}>
                            <option key={"choose color"} value={"choose color"}>choose color</option>
                            {foldersColors.map(e => <option key={e} value={e}>{e}</option>)}
                        </MySelect>
                    </div>
                    {status && <div className={styles.server_error_message}>{status}</div>}
                    <div>
                        <button type={"submit"}>New Folder</button>
                        <button type={"reset"}>Reset</button>
                    </div>
                </Form>
            }
        </Formik>
    )
}

const NewFolder = (props) => {
    const dispatch = useAppDispatch();

    const onSubmit = (values, actions) => {
        dispatch(newFolder(values.name, values.color));
        dispatch(getFolders());
        actions.resetForm();
    }

    const foldersColors = useSelector(state => state.folders.foldersList.colors);
    const validationSchema = Yup.object({
        name: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
        color: Yup.string()
            .oneOf(
                [foldersColors],
                'Invalid color'
            )
            .required('Required'),
    });

    return (
        <div>
            <h2>New Folder</h2>
            <FolderForm validationSchema={validationSchema} onSubmit={onSubmit} foldersColors={foldersColors} />
        </div>
    )
}

export default NewFolder