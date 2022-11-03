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

export const MyTextareaInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className={hasError ? styles.text_input_error : styles.text_input} {...field} {...props} />
            {hasError ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </>
    );
};


export const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className={styles.checkbox_input}>
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

export const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};