import './style.scss'
import loginbg from '../assets/images/login-bg.png'
import InputField from '../Components/InputField';
import { useState } from 'react';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';


interface FormData {
  email: string;
  password: string;
}

function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData); // Do whatever you want with the form data
      alert('Redirecting you to Dashboard')
      navigate('/dashboard')
  };

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

          <form onSubmit={handleSubmit} className='w-100'>
            <InputField type={'text'} label={'Email'} value={formData.email} name={'email'} placeholder={'jon@example.com'} onChange={handleInputChange} />

            <InputField type={'password'} label={'Password'} value={formData.password} name={'password'} placeholder={'********'} onChange={handleInputChange} />

            <div className='bottom-section'>
              <div className='remember-forget-section'>
                <input type="checkbox" name="vehicle1" value="Bike" />
                <label> Remember me</label>
              </div>

              <a href="" className='reset-link'>Reset password</a>
            </div>

            <Button type='submit' variant="primary" size="medium" onClick={() => console.log('Submit button clicked')}>
              Login
            </Button>
          </form>
        </div>
      <div>
    </div>
  </div>
</div>
    );
}

export default Login;