import React from 'react';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const handleLogin = () => {
    setCookie('user', 'john', { path: '/' });
  };

  const handleLogout = () => {
    removeCookie('user');
  };

  return (
    <div>
      {cookies.user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default App;