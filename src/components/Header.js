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
        active: false
    } 
    const [user, setUser] = useState(newUser)
    const [add, setAdd] = useState(false)
    console.log(user)
    const handleAddUser = (e) => {
        setUser({...user, [e.target.id]: e.target.value}) 
    }

    const setActiveUser = (e) => {
        console.log('check event:',e.target.checked)
        setUser({...user, active: e.target.checked})
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
                                        onChange={(e) => handleAddUser(e)}                                        
                                        placeholder="Email"
                                    />
                                </label>
                                <label htmlFor="active">
                                Active
                                    <input
                                        type="checkbox"
                                        onClick={(e) => setActiveUser(e)}
                                        value={user.active}
                                        checked={user.active}
                                    />
                                </label>
                                  <div className="d-flex justify-content-between">
                                    <button className="btn btn-outline-danger" onClick={(e) => setAdd(false)}>Cancel</button>
                                    <button className="btn btn-primary"onClick={(e) => {}}>Submit</button>
                                  </div>  
                            </form>
                        </>
                    </AddUserModal>
                    ) : null
                }
        </div>
    )
}
export default Header
