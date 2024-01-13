import Image from 'next/image';
import { usersIcon, activeUsers, loanUsers, savingsUsers } from './utils';

export default function DashboardCard() {
  const icon = [
    { name: 'users', icon: usersIcon, value: '2,543' },
    { name: 'active users', icon: activeUsers, value: '2,543' },
    { name: 'users with loans', icon: loanUsers, value: '12,453' },
    { name: 'users with savings', icon: savingsUsers, value: '102,453' },
  ];

  return (
    <section className='users'>
      <div className='dashboard-card-container'>
        {icon.map(({ name, icon, value }, _) => (
          <div className='dashboard-card' key={_}>
            <div className={'card-icon'}>
              <Image
                src={icon}
                alt={`${name} logo`}
                className='icon'
                placeholder='blur'
                quality={100}
              />
            </div>
            <p>{name}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
