import Image from 'next/image';
import Logo from '@/app/assets/logo.png';
import Hero from '@/app/assets/hero.png';
import Form from './Form';

export default function Login() {
  return (
    <section className='login-section'>
      <div className='hero-image-section'>
        <Image
          src={Logo}
          alt='Lendsqr logo'
          className='logo'
          placeholder='blur'
          quality={100}
        />
        <Image
          src={Hero}
          alt='Lendsqr Hero Image'
          className='hero'
          quality={100}
        />
      </div>
      <Form />
    </section>
  );
}
