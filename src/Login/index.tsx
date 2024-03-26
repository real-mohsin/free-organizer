import './style.scss'
import loginbg from '../assets/images/login-bg.png'
import InputField from '../Components/InputField';
import { useState, ChangeEvent } from 'react';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div className='login-container'>
      <div className='blue-box'>
        <div className='login-heading'>Designed for Individuals </div>
        <div className='sub-head'>for freelancers, free or independent
contractors</div>

        <div className='bgimg'>
          <img src={loginbg} alt={'login-bg-img'} />
        </div>
      </div>
      <div className='white-box'>
        <div className='form-container'>
          <InputField type={'text'} label={'Email'} value={email} name={'email'} placeholder={'jon@example.com'} onChange={handleEmailChange} />
          <InputField type={'password'} label={'Password'} value={password} name={'password'} placeholder={'********'} onChange={handlePasswordChange} />
        </div>
      </div>
    </div>
    );
}

export default Login;