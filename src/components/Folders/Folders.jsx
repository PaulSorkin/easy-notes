import {useAppDispatch} from "../../redux/store/store";
import {useSelector} from "react-redux";
import {getFolders} from "../../redux/store/folders-actionCreators";
import {useEffect, useState} from "react";
import Folder from "./Folder";

const Folders = (props) => {

    const dispatch = useAppDispatch();
    // const id = useSelector(state => state.folders.foldersList.id);
    // const name = useSelector(state => state.folders.foldersList.name);
    // const color = useSelector(state => state.folders.foldersList.color);
    // const notesCount = useSelector(state => state.folders.foldersList.notesCount);

    const existingFolders = useSelector(state => state.folders.foldersList.folders);
    const [folders, setFolders] = useState(existingFolders)

    useEffect( () => {
        setFolders(dispatch(getFolders()));
    }, [dispatch])

    const renderFoldersInfo = () => (
        <div>
            nope
            {existingFolders.map((e) => <Folder key={e.id} id={e.id} name={e.name} color={e.color}/>)}
        </div>
    )

    return (
        <div>
            <h2>Notes Folders</h2>
            {renderFoldersInfo()}
        </div>
    )
}

export default Folders