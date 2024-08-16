import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className='py-10 flex justify-center items-end'>
          Hecho por la gente de Vercel
        </footer>
      </body>

    </html>
  );
}
