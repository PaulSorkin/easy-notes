import './App.css';
import Login from "./components/Login/Login-form";
import Register from "./components/Login/Register-form";
import NotesPage from "./components/NotesPage";
import {Provider, useSelector} from "react-redux";
import {store, useAppDispatch} from "./redux/store/store";
import {useEffect} from "react";
import {getProfile} from "./redux/auth-actionCreators";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Main from "./components/Main/Main";

function App() {
    //const isLoggedIn = useSelector((state) => !!state.auth.authData.accessToken);
    //const dispatch = useAppDispatch();
    //
    // useEffect(() => {
    //     dispatch(getProfile());
    // }, [dispatch]);

    return (
            <BrowserRouter>
                <Provider store={store}>
                        <Routes>
                            <Route path="" element={<Main />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                </Provider>
            </BrowserRouter>

        // <>
        //     <Register/>
        //     <Login/>
        //     <NotesPage />
        // </>
    );
}

export default App;
