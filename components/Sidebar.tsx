import Image, { StaticImageData } from 'next/image';
import Logo from '@/app/assets/logo.png';
import {
  briefcase,
  dropdown,
  dashboard,
  customers,
  businesses,
  settings,
} from './utils';

interface sidebar {
  link: string;
  icon: StaticImageData;
}

export default function Sidebar() {
  const sidebarLinks = (array: Array<sidebar>) => {
    return (
      <>
        {array.map(({ link, icon }, index) => (
          <div className='link-group' key={index}>
            <Image
              src={icon}
              alt={`${link} icon`}
              className='icon'
              placeholder='blur'
              quality={100}
            />
            <p>{link}</p>
          </div>
        ))}
      </>
    );
  };

  return (
    <aside className='sidebar-container'>
      <div className='logo'>
        <Image src={Logo} alt='Lendsqr logo' placeholder='blur' quality={100} />
      </div>
      <div className='sidebar'>
        <div className='link-group'>
          <Image
            src={briefcase}
            alt='switch'
            className='icon'
            placeholder='blur'
            quality={100}
          />
          <p>Switch Organizations</p>
          <Image
            src={dropdown}
            alt='dropdown'
            className='icon'
            placeholder='blur'
            quality={100}
          />
        </div>
        <div className='link-group'>
          <Image
            src={dashboard}
            alt={'icon'}
            className='icon'
            placeholder='blur'
            quality={100}
          />
          <p>Dashboard</p>
        </div>
        <div className='links'>
          <p className='sidebar-titles'>Customers</p>
          {sidebarLinks(customers)}

          <p className='sidebar-titles'>Businesses</p>
          {sidebarLinks(businesses)}

          <p className='sidebar-titles'>Settings</p>
          {sidebarLinks(settings)}
        </div>
      </div>
    </aside>
  );
}
