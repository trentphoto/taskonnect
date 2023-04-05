import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import PartnerLogos from '@/components/PartnerLogos';

export default function CustomersPage() {
  return (
    <>
      <Layout>
        <div className='container mb-80 p-4 text-center'>
          <div className='mb-12 flex flex-col items-center gap-4'>
            <h1 className='h1'>Customers</h1>
            <p>
              Hundreds of top companies trust their task management teams to
              TasKonnect.
            </p>
            <ButtonLink href='/pricing'>Explore Pricing</ButtonLink>
          </div>

          <PartnerLogos />
        </div>
      </Layout>
    </>
  );
}
