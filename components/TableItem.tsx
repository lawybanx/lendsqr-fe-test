'use client';

import Image from 'next/image';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { ellipsis } from './utils';

interface TableItemProps {
  [key: string]: any;
}

export default function TableItem({
  key,
  orgName,
  userName,
  email,
  phoneNumber,
  createdAt,
}: TableItemProps) {
  const [activeId, setActiveId] = useState<string>('');

  const date = new Date(createdAt);
  const formattedDate = date.toLocaleString('en-NG', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const shortenStr = (str: string, num: number): string => {
    if (str.length > 7) {
      return `${str.slice(0, num)}...`;
    } else {
      return str;
    }
  };

  const slicedOrganization = shortenStr(orgName, 11);
  const slicedUserName = shortenStr(userName, 10);
  const slicedPhoneNumber = shortenStr(phoneNumber, 15);
  const slicedEmail = shortenStr(email, 7);

  return (
    <>
      <tr key={key} className='tr-body'>
        <td>{slicedOrganization}</td>
        <td>{slicedUserName}</td>
        <td>{slicedEmail}</td>
        <td>{slicedPhoneNumber}</td>
        <td>{formattedDate}</td>
        <td>
          <div>
            <p className='status'>Inactive</p>

            <div onClick={() => setActiveId(key)} className='icon'>
              <Image
                src={ellipsis}
                alt='ellipsis icon'
                placeholder='blur'
                quality={100}
              />
            </div>
            <DropdownMenu id={key} toggleDropdown={{ activeId, setActiveId }} />
          </div>
        </td>
      </tr>
    </>
  );
}
