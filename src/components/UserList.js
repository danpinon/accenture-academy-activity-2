import React from 'react'
import UserRow from '../components/UserRow'

const UserList = ({users, onClick}) => {
    console.log(users)
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
                    users={users}
                    onClick={onClick}
                    />
                </div>
                )))
            }
            
        </div>
    )
}

export default UserList
