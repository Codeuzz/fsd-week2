import React, { useState } from 'react';

const Display = ({ users, onUpdateUser }) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [editedUsername, setEditedUsername] = useState('');
  const [editedPassword, setEditedPassword] = useState('');

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedUsername(users[index].username);
    setEditedPassword(users[index].password); // Initialize with existing password
  };

  const handleSaveEdit = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = { ...updatedUsers[editIndex], username: editedUsername, password: editedPassword };
    onUpdateUser(updatedUsers);
    setEditIndex(-1);
    setEditedUsername('');
    setEditedPassword('');
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
    setEditedUsername('');
    setEditedPassword('');
  };

  return (
    <div className="display-div">
      {users.map((user, index) => (
        <div key={index} className="user-item">
          <span>{user.username}</span>
          <button onClick={() => handleEdit(index)}>Edit</button>
          {editIndex === index && (
            <div className="edit-form">
              <input
                type="text"
                value={editedUsername}
                onChange={(e) => setEditedUsername(e.target.value)}
              />
              <input
                type="text"
                value={editedPassword}
                onChange={(e) => setEditedPassword(e.target.value)}
              />
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Display;
