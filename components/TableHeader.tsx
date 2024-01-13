import Image from 'next/image';
import { filter } from './utils';

export default function TableHeader() {
  const headers = [
    'Organization',
    'Username',
    'Email',
    'Phone Number',
    'Date Joined',
    'Status',
  ];

  return (
    <>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>
              <div>
                <p>{header}</p>
                <Image
                  src={filter}
                  alt='filter icon'
                  className='icon'
                  placeholder='blur'
                  quality={100}
                />
              </div>
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}
