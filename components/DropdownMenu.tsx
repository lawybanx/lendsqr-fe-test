import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { view, blacklist, activate } from './utils';

export default function DropdownMenu({ id, toggleDropdown }: any) {
  const { activeId, setActiveId } = toggleDropdown;

  const handleClick = () => {
    // Toggle active state on each click
    setActiveId(activeId === id ? '' : id);
  };

  return (
    <ul
      onClick={handleClick}
      className={`${id === activeId ? 'show' : ''} dropdown`}
    >
      <Link
        href={`/dashboard/users/${id}`}
        style={{
          textDecoration: 'none',
        }}
      >
        <li>
          <Image
            src={view}
            alt='view icon'
            className='icon'
            placeholder='blur'
            quality={100}
          />
          <p>View Details</p>
        </li>
      </Link>
      <li>
        <Image
          src={blacklist}
          alt='blacklist icon'
          className='icon'
          placeholder='blur'
          quality={100}
        />
        <p>Blacklist User</p>
      </li>
      <li>
        <Image
          src={activate}
          alt='activate icon'
          className='icon'
          placeholder='blur'
          quality={100}
        />
        <p>Activate User</p>
      </li>
    </ul>
  );
}
