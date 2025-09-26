import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login ({ email, password, });
  }

  return(
    <form className='input-login' onSubmit={onSubmitHandler}>
      <label htmlFor='email'>Email</label>
      <input 
        type='email' 
        id='email' 
        value={email} 
        onChange={handleEmailChange} />
      <label htmlFor='password'>Password</label>
      <input 
        type='password' 
        id='password' 
        value={password} 
        onChange={handlePasswordChange} />
      <button>Submit</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;