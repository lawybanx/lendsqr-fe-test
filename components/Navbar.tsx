import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@/app/assets/searchIcon.png';
import Bell from '@/app/assets/bell.png';
import Avatar from '@/app/assets/avatar.png';
import Arrow from '@/app/assets/arrow.png';

interface NavbarProps {
  handleToggleSidebar: () => void;
  toggleSidebar: boolean;
}

export default function Navbar({
  handleToggleSidebar,
  toggleSidebar,
}: NavbarProps) {
  return (
    <nav>
        <div className='menu' onClick={handleToggleSidebar}>
          {toggleSidebar ? (
            <svg
              className='svg'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='svg'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </div>
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
