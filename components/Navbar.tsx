import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@/app/assets/searchIcon.png';
import Bell from '@/app/assets/bell.png';
import Avatar from '@/app/assets/avatar.png';
import Arrow from '@/app/assets/arrow.png';

export default function Navbar() {
  return (
    <nav>
      <div className='navbar'>
        <div className='search'>
          <div className='form-control'>
            <input type='text' placeholder='Search for anything' />
          </div>
          <button className='search-btn'>
            <Image src={SearchIcon} alt='search' quality={100} />
          </button>
        </div>
        <div className='right-side'>
          <Link href='#' className='Link'>
            Docs
          </Link>
          <Image
            src={Bell}
            className='image'
            alt='notification icon'
            quality={100}
          />
          <Image
            src={Avatar}
            alt='avatar'
            className='user-avatar'
            quality={100}
          />
          <div className='user'>
            <p>Adedeji</p>
            <Image src={Arrow} alt='dropdown' quality={100} />
          </div>
        </div>
      </div>
    </nav>
  );
}
