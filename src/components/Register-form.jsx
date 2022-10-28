import {Form, Formik} from "formik";
import {MyTextInput} from "./FormsControl";
import styles from "./FormsControl.module.css";
import * as Yup from "yup";
import axios from "axios";

const RegisterForm = ({validationSchema, onSubmit}) => {
    return (
        <Formik initialValues={{
            username: '',
            email: '',
            password: '',
        }} validationSchema={validationSchema} onSubmit={onSubmit}
        >
            {({status}) =>
                <Form>
                    <div>
                        <MyTextInput name={"username"} placeholder={"Username"} />
                    </div>
                    <div>
                        <MyTextInput name={"email"} placeholder={"Email"} />
                    </div>
                    <div>
                        <MyTextInput name={"password"} type={"password"} placeholder={"Password"} />
                    </div>
                    {status && <div className={styles.server_error_message}>{status}</div>}
                    <div>
                        <button type={"submit"}>Register</button>
                        <button type={"reset"}>Reset</button>
                    </div>
                </Form>
            }
        </Formik>
    );
}

const Register = () => {

    const instance = axios.create({
        //withCredentials: true,
        baseURL: "https://test-api.misaka.net.ru/api/",
        //headers: {}
    });

    const authAPI = {
        register(username, email, password) {
            return instance.post("Account/register", {username, email, password})
        }
    }

    const register = async (username, email, password) => {
        let response = await authAPI.register(username, email, password);
        console.log(response)
    }

    const onSubmit = (values, actions) => {
        register(values.username, values.email, values.password);
        actions.setSubmitting(false);
    }

    const validationSchema = Yup.object({
        username: Yup.string()
            .max(32, 'Must be 32 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .max(32, 'Must be 32 characters or less')
            .required('Required'),
    });


    return (
        <div>
            <h1>Register</h1>
            <RegisterForm onSubmit={onSubmit} validationSchema={validationSchema} />
        </div>
    );
}

export default Register;