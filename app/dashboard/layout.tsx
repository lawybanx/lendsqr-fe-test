import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import ToggleSideBar from '@/components/ToggleSideBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ToggleSideBar />
      <div>{children}</div>
    </section>
  );
}
