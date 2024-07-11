/* eslint-disable no-unused-vars */
import React from 'react';
import AddUserMessage from './AddUserMessage';

const GithubUserList = () => {
  const githubUsers = [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' },
    { id: 3, username: 'user3' }
  ];

  return (
    <div>
      <h1>Github User List</h1>
      <ul>
        {githubUsers.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      <AddUserMessage /> 
    </div>
  );
};

export default GithubUserList;
