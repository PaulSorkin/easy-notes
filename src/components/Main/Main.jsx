import {useAppDispatch} from "../../redux/store/store";
import {useSelector} from "react-redux";
import {getProfile} from "../../redux/auth-actionCreators";
import Login from "../Login/Login-form";
import Folders from "../Folders/Folders";
import {newFolder} from "../../redux/store/folders-actionCreators";
import NewFolder from "../Folders/NewFolderForm";
import NewNote from "../Notes/NewNote";

const Main = (props) => {

    // useEffect(() => {
    //     dispatch(getProfile());
    // }, [dispatch]);


    const dispatch = useAppDispatch();

    const id = useSelector((state) => state.auth.profileData.id);
    const email = useSelector((state) => state.auth.profileData.email);
    const username = useSelector((state) => state.auth.profileData.username);
    const isLoggedIn = useSelector((state) => !!state.auth.authData.accessToken);

    const renderMainPage = () => (
        <div>
            <p>Glad to see you, {username}</p>
            <p>Your id is {id}</p>
            <p>Email {email}</p>
            <button onClick={() => dispatch(getProfile())}>Update profile</button>
            <Folders />
            <NewFolder />
        </div>
    );

    return (
        <div>
            <h1>Main</h1>
            {isLoggedIn ? renderMainPage() : <Login />}
        </div>
    );
}

export default Main