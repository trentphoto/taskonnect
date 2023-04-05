import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='m-0'>
        <Navbar />
        <main className='relative'>{children}</main>
        <Footer />
      </div>
    </>
  );
}
