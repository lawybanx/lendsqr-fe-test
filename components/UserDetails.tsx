'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DetailHeader from './DetailHeader';
import DetailItem from './DetailItem';
import { backArrow } from './utils';

interface UserDetailsProps {
  id: string;
  userDetail: User;
}

interface User {
  [key: string]: any;
}

export default function UserDetails({ id, userDetail }: UserDetailsProps) {
  const [user, setUser] = useState<User>();

  const fetchUserDetails = (): void => {
    const usersFromLocalStorage = localStorage.getItem('users');
    if (usersFromLocalStorage) {
      const users: User[] = JSON.parse(usersFromLocalStorage);

      const user = users?.find((user: User) => user.id === id);
      if (user) {
        setUser(user);
      } else {
        users.push(userDetail);
        localStorage.setItem('users', JSON.stringify(users));
        setUser(userDetail);
      }
    } else {
      const users = [userDetail];
      localStorage.setItem('users', JSON.stringify(users));
      setUser(userDetail);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  const personal = [
    {
      title: 'Full Name',
      value: `${user?.profile.firstName} ${user?.profile?.lastName}`,
    },
    { title: 'Phone Number', value: user?.profile.phoneNumber },
    { title: 'Email Address', value: user?.email },
    { title: 'BVN', value: user?.profile.bvn },
    { title: 'Gender', value: user?.profile.gender },
    { title: 'Marital Status', value: 'None' },
    { title: 'Children', value: 'None' },
    { title: 'Type of Residence', value: 'None' },
  ];
  const education = [
    { title: 'Level of Education', value: user?.education.level },
    { title: 'Employment Status', value: user?.education.employmentStatus },
    { title: 'Sector of Residence', value: user?.education.sector },
    { title: 'Duration of Employment', value: user?.education.duration },
    { title: 'Office Email', value: user?.education.officeEmail },
    {
      title: 'Monthly Income',
      value: `₦${user?.education.monthlyIncome[0]} - ₦${user?.education.monthlyIncome[1]}`,
    },
    { title: 'Loan Repayment', value: `₦${user?.education.loanRepayment}` },
  ];
  const socials = [
    { title: 'Twitter', value: user?.socials.twitter },
    { title: 'Facebook', value: user?.socials.facebook },
    { title: 'Instagram', value: user?.socials.instagram },
  ];
  const guarantor = [
    {
      title: 'Full Name',
      value: `${user?.guarantor.firstName} ${user?.guarantor.lastName}`,
    },
    { title: 'Phone Number', value: user?.guarantor.phoneNumber },
    { title: 'Email', value: 'None' },
    { title: 'Relationship', value: 'None' },
  ];

  return (
    <>
      <Link
        href='/dashboard/users'
        style={{
          textDecoration: 'none',
        }}
      >
        <div className='go-back'>
          <Image
            src={backArrow}
            alt='back icon'
            className='icon'
            quality={100}
          />
          <p>Back to Users</p>
        </div>
      </Link>

      <main className='details-wrapper'>
        <div className='title'>
          <h1>User Details</h1>
          <div className='title-buttons'>
            <button>Blacklist User</button>
            <button>Activate User</button>
          </div>
        </div>

        {user && (
          <>
            <DetailHeader user={user} />
            <div className='details-info'>
              <div className='detail-item-wrapper'>
                <h3>Personal Information</h3>
                <DetailItem details={personal} />
              </div>
              <div className='detail-item-wrapper education'>
                <h3>Education and Employment</h3>
                <DetailItem details={education} />
              </div>
              <div className='detail-item-wrapper'>
                <h3>Socials</h3>
                <DetailItem details={socials} />
              </div>
              <div className='detail-item-wrapper'>
                <h3>Guarantor</h3>
                <DetailItem details={guarantor} />
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
