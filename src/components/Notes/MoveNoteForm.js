import {Form, Formik} from "formik";
import {MySelect} from "../FormsControl/FormsControl";
import styles from "../FormsControl/FormsControl.module.css";

export const MoveNoteForm = ({validationSchema, onSubmit, avalibleFolders}) => {
    return (
        <Formik initialValues={{
            myAvalibleFolders: ''
        }}
                onSubmit={onSubmit} validationSchema={validationSchema}>
            {({status}) =>
                <Form>
                    <MySelect name="myAvalibleFolders">
                        <option key={"select folder"} value={"select folder"}>select folder</option>
                        {avalibleFolders.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                    </MySelect>
                    {status && <div className={styles.server_error_message}>{status}</div>}
                    <div>
                        <button type={"submit"}>Transfer</button>
                    </div>
                </Form>
            }
        </Formik>
    )
}