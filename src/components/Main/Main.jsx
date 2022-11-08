import {useAppDispatch} from "../../redux/store/store";
import {useSelector} from "react-redux";
import {getProfile} from "../../redux/auth-actionCreators";
import Login from "../Login/Login-form";
import Folders from "../Folders/Folders";
import {newFolder} from "../../redux/store/folders-actionCreators";
import NewFolder from "../Folders/NewFolderForm";
import NewNote from "../Notes/NewNote";
import {useEffect} from "react";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";

const Main = (props) => {

    // useEffect(() => {
    //     dispatch(getProfile());
    // }, [dispatch]);


    useEffect(() => {
        document.title = 'Easy notes';
    }, []);


    const dispatch = useAppDispatch();
    const isLoggedIn = useSelector((state) => !!state.auth.authData.accessToken);
    const profileData = useSelector((state) => state.auth.profileData);


    const renderMainPage = () => (
        <>
            <header>
                <Header profileData={profileData}/>
            </header>
            <main>
                <MainContent/>
            </main>
            <footer>
                Github, year, etc
            </footer>
            {/*<div>*/}
            {/*    <button onClick={() => dispatch(getProfile())}>Update profile</button>*/}
            {/*    <Folders/>*/}
            {/*    <NewFolder/>*/}
            {/*</div>*/}
        </>
    );

    return (
        <div>
            <h1>Main</h1>
            {isLoggedIn ? renderMainPage() : <Login/>}
        </div>
    );
}

export default Main