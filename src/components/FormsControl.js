import styles from "./FormsControl.module.css"
import {useField} from "formik";

export const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={hasError ? styles.text_input_error : styles.text_input} {...field} {...props} />
            {hasError ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </>
    );
};
