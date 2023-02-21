import React, { useContext, useState, useCallback, useEffect } from 'react';
import './Signin.scss';
import TextField from '@mui/material/TextField';
import { UserContext } from '../../Context/UsersContext/UsersContext';
import { loginUser } from '../../Context/UsersContext/apiCalls';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, dispatch, loggedInUser } = useContext(UserContext);

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    loginUser({ email, password }, dispatch);
  }, [email, password, dispatch]);

  useEffect(() => {
    if (loggedInUser) {
      setEmail('');
      setPassword('');
    }
  }, [loggedInUser]);

  return (
    <form className="main" onSubmit={handleLogin}>
      <div className="container1">
        <div className="Signin">
          <h1>Sign In</h1>
          <TextField name="email" label="E-mail" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
          <TextField name="password" type="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="forgetpass">
          <a href="./Forgetpass">Forget password</a>
          <button className="Loginbtn" type="submit"  >Login</button>
        </div>
      </div>
    </form>
  );
};

export default Signin;
