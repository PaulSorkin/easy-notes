import styles from "./FormsControl.module.css"
import {Form, Formik} from "formik";
import {MyTextInput} from "./FormsControl";
import * as Yup from "yup";

const LoginForm = ({validationSchema, onSubmit}) => {
    return (
        <Formik initialValues={{
            username: '',
            password: '',
        }} validationSchema={validationSchema} onSubmit={onSubmit}
        >
            {({status}) =>
                <Form>
                    <div>
                        <MyTextInput name={"username"} placeholder={"Username"} />
                    </div>

                    <div>
                        <MyTextInput name={"password"} type={"password"} placeholder={"Password"} />
                    </div>
                    {status && <div className={styles.server_error_message}>{status}</div>}
                    <div>
                        <button type={"submit"}>Login</button>
                        <button type={"reset"}>Reset</button>
                    </div>
                </Form>
            }
        </Formik>
    );
}

const Login = (props) => {

    const onSubmit = (values, actions) => {
        props.login(values.email, values.password, actions.setStatus);
        actions.setSubmitting(false);
    };

    const validationSchema = Yup.object({
        username: Yup.string()
            .max(32, 'Must be 32 characters or less')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .max(32, 'Must be 32 characters or less')
            .required('Required'),
    });


    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} validationSchema={validationSchema} />
        </div>
    );
}

export default Login