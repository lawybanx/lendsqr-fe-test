'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Logo from '@/app/assets/logo.png';

export default function Form() {
  const router = useRouter();

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [hide, setHide] = useState<boolean>(true);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email) &&
    credentials.password.length >= 8;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validateForm()) {
      router.push('/dashboard/users');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='login-form-section'>
      <div className='form-header'>
        <div className='logo-section'>
          <Image
            src={Logo}
            alt='Lendsqr logo'
            className='logo'
            placeholder='blur'
            quality={100}
          />
        </div>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </div>
      <div className='form-control'>
        <input
          name='email'
          type='email'
          placeholder='Email'
          required
          value={credentials.email}
          onChange={handleChange}
        />
      </div>
      <div className='form-control'>
        <input
          name='password'
          type={hide ? 'password' : 'text'}
          placeholder='Password'
          required
          value={credentials.password}
          onChange={handleChange}
          minLength={8}
        />
        <span className='show' onClick={() => setHide(!hide)}>
          {hide ? 'Show' : 'Hide'}
        </span>
      </div>
      <p className='forgot-password'>Forgot Password?</p>
      <button type='submit'>Log In</button>
    </form>
  );
}
