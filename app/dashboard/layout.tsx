export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar/>
      <Sidebar/>
      <div>{children}</div>
    </section>
  );
}
