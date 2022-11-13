import './App.css';
import Login from "./components/Login/Login-form";
import Register from "./components/Login/Register-form";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import {BrowserRouter, Route, Routes} from "react-router-dom"
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
