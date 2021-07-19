import React from 'react'

const Header = ({onClick, users}) => {
    function idGenerator() {
        return Math.floor(Math.random() * 10000)
    }
    return (
        <div className="my-4 row align-items-center">
            <h2 className="col-4">User Manager ({users.length})</h2>
            <button className="col-2 shadow-sm btn btn-primary" onClick={() => onClick([...users, {
                id: idGenerator(),
                name: "New User",
                lastName: "Lastname",
                email: "test@test.com",
                url: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
            }])}>Agregar</button>
        </div>
    )
}

export default Header
