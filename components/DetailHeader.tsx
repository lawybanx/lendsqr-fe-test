import Image from 'next/image';
import { fullStar, emptyStar } from './utils';

interface DetailHeaderProps {
  [key: string]: any;
}

export default function DetailHeader({ user }: { user: DetailHeaderProps }) {
  return (
    <section className='header-details-wrapper'>
      <div className='header-details'>
        <div className='avatar'>
          <Image
            src={user.profile?.avatar}
            alt='user avatar'
            className='image'
            width={100}
            height={100}
            quality={100}
          />
          <div className='user-name'>
            <p>{`${user.profile.firstName} ${user.profile.lastName}`}</p>
            <p>{user.userName}</p>
          </div>
        </div>
        <div>
          <div className='col-2'>
            <p>User&apos;s Tier</p>
            <div>
              <Image
                src={fullStar}
                alt='fuu star icon'
                className='icon'
                quality={100}
              />
              <Image
                src={emptyStar}
                alt='star icon'
                className='icon'
                quality={100}
              />
              <Image
                src={emptyStar}
                alt='star icon'
                className='icon'
                quality={100}
              />
            </div>
          </div>
          <div className='col-3'>
            <p>₦{user.accountBalance}</p>
            <p>{user.accountNumber}/Providus Bank</p>
          </div>
        </div>
      </div>

      <div className='header-nav'>
        <p className='active'>General Details</p>
        <p>Documents</p>
        <p>Bank Details</p>
        <p>Loans</p>
        <p>Savings</p>
        <p>App and System</p>
      </div>
    </section>
  );
}
