const Note = (props) => {
    return (
        <div>
            <p>id: {props.id}</p>
            <p>title: {props.title}</p>
            <p>content: {props.content}</p>
            <p>color: {props.color}</p>
            <p>created: {props.created}</p>
            <p>updated: {props.updated}</p>
            <button>Delete note</button>
        </div>
    )
}

export default Note