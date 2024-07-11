/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUserMessage from './components/AddUserMessage';
import GithubUserList from './components/GithubUserList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/GithubUserList" element={<GithubUserList />}>
          <Route index element={<AddUserMessage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
