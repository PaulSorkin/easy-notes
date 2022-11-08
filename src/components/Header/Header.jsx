const Header = (props) => {

    return (
        <div id={"header_container"}>
            <div>
                <p>Glad to see you, {props.profileData.username}</p>
            </div>
            <div className={"header__line"}>
                <div>
                    <p>Your id is {props.profileData.id}</p>
                    <p>Email {props.profileData.email}</p>
                </div>
                <div>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Header