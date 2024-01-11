import type { Metadata } from 'next';
import './styles/main.scss';

export const metadata: Metadata = {
  title: 'Lendsqr | Empowering the smartest lenders',
  description: 'Lendsqr | Empowering the smartest lenders',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
