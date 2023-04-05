import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

export default function Layout({
  children,
  templateTitle,
}: {
  children: React.ReactNode;
  templateTitle?: string;
}) {
  return (
    <>
      <Seo templateTitle={templateTitle || ''} />
      <div className='m-0'>
        <Navbar />
        <main className='relative'>{children}</main>
        <Footer />
      </div>
    </>
  );
}
