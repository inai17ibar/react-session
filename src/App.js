import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    axios.post('http://localhost:8080/login', { withCredentials: true })
      .then(response => {
        console.log(response.data);
        setIsLoggedIn(true);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleLogout = () => {
    axios.post('http://localhost:8080/logout', { withCredentials: true })
      .then(() => setIsLoggedIn(false))
      .catch(err => console.error(err));
  };

  const checkSecret = () => {
    console.log("checkSecret is called");
    axios.get('http://localhost:8080/secret',{}, { withCredentials: true }) //これがひつようだった
      .then(response => console.log(response.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={checkSecret}>Check Secret</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default App;