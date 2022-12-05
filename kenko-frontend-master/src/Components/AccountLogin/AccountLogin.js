import React from 'react';

import './AccountLogin.css';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useLocation } from 'react-router';

function AccountLogin() {

  const location = useLocation();

    return (

      <div className="accountlogin">  
        <div className='login-btn' >
          <Button size="small" className='button' href="/">
            Log Out
          </Button>
        </div>  
            {/* <div className="register-btn"> <Button size="small" className='button' href="#outlined-buttons">
            Get Started
            </Button></div> */}
            <div>{location.state.name}</div>
        <div className="accounticon">
          <AccountCircleIcon /> 
        </div>
  
      </div>
    );
  }

export default AccountLogin;