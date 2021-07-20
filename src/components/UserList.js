import React from 'react'
import UserRow from '../components/UserRow'

const UserList = ({users, setUsers}) => {
    return (
        <div className="p-4">
            {
                users.map((user, index) => ((
                <div>
                    <UserRow 
                    key={index}
                    name={user.name}
                    lastName={user.lastName} 
                    email={user.email} 
                    url={user.url} 
                    id={user.id}
                    active={user.active}
                    users={users}
                    setUsers={setUsers}
                    />
                </div>
                )))
            }
            
        </div>
    )
}

export default UserList
