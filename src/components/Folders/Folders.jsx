import {useSelector} from "react-redux";
import Folder from "./Folder";

const Folders = (props) => {
    const existingFolders = useSelector(state => state.folders.foldersList.allFolders);
    return (
        <div>
            <h2>Notes Folders</h2>
            {existingFolders.map(e => <Folder key={e.id} id={e.id} name={e.name} color={e.color} />)}
        </div>
    )
}

export default Folders