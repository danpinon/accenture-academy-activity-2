import React, { useState } from 'react'
import AddUserModal from './AddUserModal'

const Header = ({users, setUsers}) => {

    const [isActive, setIsActive] = useState(false)
    const newUser = {
        id: new Date().valueOf(),
        name: "New User",
        lastName: "Lastname",
        email: "test@test.com",
        url: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
        active: 'dd'
    } 
    const [user, setUser] = useState(newUser)
    const [add, setAdd] = useState(false)
    
    const handleAddUser = (e) => {
        setUser({...user, [e.target.id]: e.target.value, active: isActive}) 
    }
    
    return (
        <div className="my-4 row align-items-center">
            <h2 className="col-4">User Manager ({users.length})</h2>
            <button className="col-2 shadow-sm btn btn-primary" onClick={() => setAdd(true)}>Agregar</button>
            {
                   add ? (
                    <AddUserModal>
                        <>
                            <form 
                            onSubmit={() => {
                                setUsers([...users, user])
                                setAdd(false)
                                setUser(newUser)
                            }}>
                               
                                    <label htmlFor="url" className="d-flex justify-content-between py-1">
                                        Image Url
                                            <input
                                                id="url"
                                                onChange={(e) => handleAddUser(e)}
                                                placeholder="Image Url"
                                            />
                                    </label>
                                    <label htmlFor="name" className="d-flex justify-content-between py-1">
                                    Name
                                        <input
                                            id="name"
                                            onChange={(e) => handleAddUser(e)}
                                            placeholder="Name"
                                        />
                                    </label>
                                    <label htmlFor="lastName" className="d-flex justify-content-between py-1">
                                    Last Name
                                        <input
                                            id="lastName"
                                            onChange={(e) => handleAddUser(e)}
                                            placeholder="Last Name"
                                        />
                                    </label>
                                    <label htmlFor="email" className="d-flex justify-content-between py-1">
                                Email
                                    <input
                                        id="email"
                                        type='email'
                                        onClick={(e) => handleAddUser(e)}                                        
                                        placeholder="Email"
                                    />
                                </label>
                                <label htmlFor="active">
                                Active
                                    <input
                                        id="isActive"
                                        type="checkbox"
                                        onClick={(e) => {
                                            handleAddUser(e)
                                            setIsActive(!isActive)}}
                                        value={isActive}
                                        checked={isActive}
                                    />
                                </label>
                                    
                                <button onClick={(e) => setAdd(false)}>Cancel</button>
                                <button onClick={(e) => {}}>Submit</button>
                            </form>
                        </>
                    </AddUserModal>
                    ) : null
                }
        </div>
    )
}
export default Header
