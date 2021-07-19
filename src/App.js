import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])
  console.log(users)
  return (
    <div className="App">
      <Header users={users} onClick={(value) => {setUsers(value)}} />
      <UserList users={users} onClick={(value) => {setUsers(value)}}/>
    </div>
  );
}

export default App;
