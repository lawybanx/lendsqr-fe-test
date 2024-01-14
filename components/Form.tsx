// 'use client'

import Link from 'next/link';

export default function Form() {
  return (
    <form className='login-form-section'>
      <div className='form-header'>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </div>
      <div className='form-control'>
        <input type='email' placeholder='Email' />
      </div>
      <div className='form-control'>
        <input type='password' placeholder='Password' />
      </div>
      <p className='forgot-password'>Forgot Password?</p>
      <Link href='/dashboard/users'>
        <button>Log In</button>
      </Link>
    </form>
  );
}
