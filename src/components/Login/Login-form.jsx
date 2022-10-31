import styles from "../FormsControl/FormsControl.module.css"
import {Form, Formik} from "formik";
import {MyTextInput} from "../FormsControl/FormsControl";
import * as Yup from "yup";
import {accountAPI} from "../../api/api"
import {useAppDispatch} from "../../redux/store/store";
import {useState} from "react";
import {loginUser} from "../../redux/auth-actionCreators";

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

    const dispatch = useAppDispatch();

    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');

    const onSubmit = (values) => {
        dispatch(loginUser(values.username, values.password))
    }


     // const onSubmit = async (values, actions) => {
     //     let response = await accountAPI.login(values.username, values.password);
     //     actions.setSubmitting(false);
     //     console.log(response)
     // };


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