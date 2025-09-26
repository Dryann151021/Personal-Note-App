import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import content from '../contexts/content';

function RegisterInput({ register }) {
  const {locale} = React.useContext(content);

  const [name, handleNamaChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [confirmPassword, handleConfirmPasswordChange] = useInput('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(locale === 'id' ? 
        'Konfirmasi password salah' : 
        'Password confirmation doesn\'t match');
      return;
    }
    register({ name, email, password });
  } 

  return(
    <form className='input-register' onSubmit={onSubmitHandler}>
      <label htmlFor='nama'>Nama</label>
      <input 
        type='text' 
        id='name' 
        value={name} 
        onChange={handleNamaChange}/>
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
      <label htmlFor='confirmPassword'>Confirm Password</label>
      <input 
        type='password' 
        id='confirmPassword' 
        value={confirmPassword} 
        onChange={handleConfirmPasswordChange} />
      <button>Submit</button>
    </form>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
}
export default RegisterInput;