import Folders from "../Folders/Folders";
import NewFolder from "../Folders/NewFolderForm";
import NotesPage from "../NotesPage";
import FolderNotes from "../Folders/FolderNotes";

const MainContent = (props) => {

    return (
        <div className={"main_container"}>
            <div className={"folders_block"}>
                    <Folders/>
                    <NewFolder/>
            </div>
            <div className={"notes_block"}>
                <NotesPage />
                <FolderNotes />
            </div>
        </div>
    )
}

export default MainContent