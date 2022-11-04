import {useAppDispatch} from "../../redux/store/store";
import {deleteFolder} from "../../redux/store/folders-actionCreators";

const Folder = (props) => {

    const dispatch = useAppDispatch()

    return (
        <div>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.color}</p>
            <button onClick={() => dispatch(deleteFolder(props.id))}>Delete entire folder</button>
        </div>
    )
}

export default Folder