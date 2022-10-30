import './App.css';
import Login from "./components/Login-form";
import Register from "./components/Register-form";
import NotesPage from "./components/NotesPage";

function App() {
    return (
        <>
            <Register/>
            <Login/>
            <NotesPage />
        </>
    );
}

export default App;
