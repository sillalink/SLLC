import Footer from "./components/Footer";
import { MainNavbar } from "./components/header/MainNavbar";
import { Poppins, Inspiration } from 'next/font/google';

// Load Poppins (with multiple weights)
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

// Load Inspiration (handwriting font, single weight)
const inspiration = Inspiration({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inspiration',
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${poppins.variable} ${inspiration.variable} font-sans`}>
      <main lang="en" className="mx-auto py-4">
        <MainNavbar />
        {children}
        <Footer/>
      </main>
    </div>
  );
}