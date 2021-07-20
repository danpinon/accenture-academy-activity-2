import React, { useState } from 'react'
import '../App.css'
import AddUserModal from './AddUserModal'
const UserRow = ({name, lastName, email, url, id, active, users, setUsers}) => {
    console.log(active)
    const [isActive, setIsActive] = useState(active)
    const [edit, setEdit] = useState(false)
    const [user, setUser] = useState({
        id,
        name,
        lastName,
        email,
        url,
        active
      
    })
    const handleRemoveUser = () => {
       const newUsers = users.filter(user => user.id !== id)
       setUsers(newUsers)
    }

    const handleUpdateUser = (theUser) => {
        const newUsers = users.map(user => {
            if (user.id === id) {
                console.log('the user',theUser)
                return {
                    ...user,
                    id: theUser.id,       
                    name: theUser.name,
                    lastName: theUser.lastName,
                    email: theUser.email,
                    url: theUser.url,
                    active: theUser.active
                }
            }
            return user
        })
        setIsActive(user.active)
        setUsers(newUsers)
    }

    const handleStateUser = (e) => {    
        setUser({...user, [e.target.id]: e.target.value})
    }

    const setActiveUser = (e) => {
        setUser({...user, active: e.target.checked})
    }

    console.log(user)
    return (
        <div className="border p-2 row justify-content-between rounded mb-2 shadow-sm">
            <div className="row ml-4 align-items-center">
                <div className={`mr-3 border rounded-circle border-width overflow-hidden d-flex justify-content-center ${isActive? 'border-success': 'border-danger'}`} style={{height: "50px", width: "50px"}}>
                    <img className="h-100 "src={url} alt="profile"/>
                </div>
                <h5>{active} {name} {lastName} ({email})</h5>
            </div>
            <div className="row mr-3 align-items-center">
                <button onClick={() => setEdit(!edit)} className="mr-4 button">
                    Editar
                </button>
                {isActive ? (
                        <button className="mr-4 button" onClick={() => setIsActive(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                        </svg>
                        </button>
                    ) : (
                        <button className="mr-4 button" onClick={() => setIsActive(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
                            </svg>
                        </button>
                    )}
                
                
                <button className="button" onClick={() => handleRemoveUser()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>
                {
                   edit ? (
                    <AddUserModal>
                        <>
                            <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdateUser(user)
                                setEdit(!edit)
                            }}
                            >
                                <label htmlFor="url" className="d-flex justify-content-between py-1">
                                Image Url
                                    <input
                                        id="url"
                                        onChange={(e) => handleStateUser(e)}
                                        value={user.url}
                                        placeholder="Image Url"
                                    />
                                </label>

                                <label htmlFor="name" className="d-flex justify-content-between py-1">
                                Name
                                    <input
                                        id="name"
                                        onChange={(e) => handleStateUser(e)}
                                        value={user.name}
                                        placeholder="Name"
                                    />
                                </label>

                                <label htmlFor="lastName" className="d-flex justify-content-between py-1">
                                Lastname
                                    <input
                                        id="lastName"
                                        onChange={(e) => handleStateUser(e)}
                                        value={user.lastName}
                                        placeholder="Last Name"
                                    />
                                </label>

                                <label htmlFor="email" className="d-flex justify-content-between py-1">
                                Email
                                    <input
                                        id="email"
                                        type='email'
                                        onChange={(e) => handleStateUser(e)}
                                        value={user.email}
                                        placeholder="Email"
                                    />
                                </label>
                                <label htmlFor="active">
                                Active
                                    <input
                                        id="active"
                                        type="checkbox"
                                        onClick={(e) => {
                                            
                                            setActiveUser(e)
                                            }}
                                        value={user.active}
                                        checked={user.active}
                                    />
                                </label>
                                <button onClick={(e) => setEdit(false)}>Cancel</button>
                                <button className="btn btn-primary">Submit</button>
                            </form>
                        </>
                    </AddUserModal>
                    ) : null
                }
            </div>
        </div>
    )
}

export default UserRow
