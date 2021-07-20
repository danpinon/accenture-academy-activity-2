import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])
  return (
    <div className="App">
      <Header users={users} setUsers={(value) => {setUsers(value)}} />
      <UserList users={users} setUsers={(value) => {setUsers(value)}}/>
    </div>
  );
}

export default App;
