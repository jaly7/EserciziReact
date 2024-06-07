import React, { useState } from 'react';

function Login() {
  const [signIn, setSignIn] = useState({username: '', password: '', remember: false});

  function handleInput(event) {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setSignIn({ ...signIn, [name]: newValue });
  };

  function handleSubmit (event){
    event.preventDefault();
    console.log('Login Data:', signIn);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Username:</p>
        <input type="text" id="username" name="username" value={signIn.username} onChange={handleInput} style={{borderRadius:'8px'}}/>
      </div>
      <div>
        <p>Password:</p>
        <input type="password" id="password" name="password" placeholder='PASSWORD' value={signIn.password} onChange={handleInput} style={{borderRadius:'8px'}}/>
      </div>
      <div>
        <input type="checkbox" id="remember" name="remember" placeholder='USERNAME' checked={signIn.remember} onChange={handleInput}/>
        Remember me
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
