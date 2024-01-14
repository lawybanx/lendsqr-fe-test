import DashboardCard from '@/components/DashboardCard';
import UsersTable from '@/components/UsersTable';

export default function page() {
  return (
    <div className='dashboard'>
      <h1>Users</h1>
      <DashboardCard />
      <UsersTable />
    </div>
  );
}
