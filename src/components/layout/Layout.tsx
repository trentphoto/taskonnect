import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='m-0 grid min-h-screen grid-rows-[auto_1fr_auto]'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
