import Folders from "../Folders/Folders";
import NewFolder from "../Folders/NewFolderForm";

const MainContent = (props) => {

    return (
        <div className={"main_container"}>
            <div className={"folders_block"}>
                <div>
                    <Folders/>
                </div>
                <div>
                    <NewFolder/>
                </div>
            </div>
            <div>
                NOTES
            </div>
        </div>
    )
}

export default MainContent