const UserProfile = ({ user }) => {
    return (
        <p className="username-p">{user?.username}</p>
    )
}

export default UserProfile