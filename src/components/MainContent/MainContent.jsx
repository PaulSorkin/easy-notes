import Folders from "../Folders/Folders";
import NewFolder from "../Folders/NewFolderForm";

const MainContent = (props) => {

    return (
        <div className={"main_container"}>
            <div>
                <Folders/>
            </div>
            <div>
                <NewFolder/>
            </div>
        </div>
    )
}

export default MainContent