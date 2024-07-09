import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Display from './Components/Display'

function App() {
  const [users, setUsers] = useState([]);

  const handleSave = (updatedUsers) => {
    setUsers(updatedUsers);
  };

  return (
    <>
      <Form onSave={handleSave} />
      <Display users={users} onUpdateUser={handleSave} />
    </>
  )
}

export default App
