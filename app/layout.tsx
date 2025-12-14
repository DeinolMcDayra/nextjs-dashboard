import './ui/global.css';
import { inter } from './ui/fonts';

export const metadata = {
  title: 'Acme Dashboard',
  description: 'Dashboard tutorial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
