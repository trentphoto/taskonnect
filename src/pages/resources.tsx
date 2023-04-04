import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';

import PhoneImage from '~/images/phone.webp';

export default function ResourcesPage() {
  return (
    <>
      <Layout>
        <section className='relative'>
          <div className='absolute bottom-0 left-0 right-0 top-0 -z-20 h-full w-full'>
            <Image
              src={PhoneImage}
              width={1200}
              height={1200}
              alt='Phone'
              className='h-full w-full object-cover object-center'
            />
          </div>
          <div className='absolute inset-0 z-10 bg-gray-950/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-950/95 sm:to-gray-900/25'></div>

          <div className='container relative z-20 mx-auto px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8'>
            <div className='max-w-2xl text-center sm:text-left'>
              <h1 className='text-3xl font-extrabold sm:text-5xl'>
                Turn your iPhone into a
                <strong className='block font-extrabold text-blue-600'>
                  Productivity Superpower
                </strong>
              </h1>

              <p className='mt-4 max-w-lg sm:text-xl sm:leading-relaxed'>
                With our groundbreaking app, you can turn your iPhone into a
                productivity superpower. TasKonnect is the only app that
                combines a powerful task manager with a powerful calendar.
              </p>

              <div className='mt-8 flex flex-wrap gap-4 text-center'>
                <ButtonLink href='/signin'>Get Started</ButtonLink>
                <ButtonLink href='/pricing' variant='light'>
                  View Pricing
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
