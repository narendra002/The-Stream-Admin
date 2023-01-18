import React from 'react';
import "./Signin.scss";
import TextField from '@mui/material/TextField';

const Signin = () => {
    return (
    
            <div className='main'>
               <div className='container'>
                    <div className='Signin'>
                       <h1>Sign In</h1>
                       <TextField label="E-mail" variant="outlined" className='Email'     />
                       <TextField label="Password" variant="outlined" className='Email'  />
                       {/* <PasswordField hintText="At least 8 characters" floatingLabelText="Enter your password" errorText="Your password is too short"npm/> */}
                    </div>
                    
                    <div className='forgetpass'>
                        <a href='./Forgetpass'>Forget password</a>
                        <button className='Loginbtn'>Login</button>

                    </div>
                </div>
            </div>
   
    );
};

export default Signin;