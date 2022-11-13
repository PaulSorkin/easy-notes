const Header = (props) => {

    return (
        <div className={"header_container"}>
            <div className={"greeting_user"}>
                <p>Glad to see you {props.profileData.username}</p>
            </div>
            <div className={"header__line"}>
                <div>
                    <p><strong>Your id:</strong> {props.profileData.id}</p>
                    <p><strong>Email: </strong> {props.profileData.email}</p>
                </div>
                <div>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Header