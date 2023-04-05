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
                <strong className='my-2 block bg-white p-2 font-extrabold text-slate-800'>
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

        <section className='bg-gray-900 text-white'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
            <div className='mx-auto max-w-lg text-center'>
              <h2 className='text-3xl font-bold sm:text-4xl'>
                Resources Coming Soon.
              </h2>

              <p className='mt-4 text-gray-300'>
                Tutorials, guides, and whitepapers to help you take your use of
                TasKonnect to the next level.
              </p>
            </div>

            <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <a
                className='block rounded-xl border border-gray-800 p-8 shadow-lg transition hover:scale-105 hover:shadow-xl'
                href='/services/digital-campaigns'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-lime-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z' />
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  />
                </svg>

                <h2 className='mt-4 text-xl font-bold text-white'>
                  Digital whitepapers
                </h2>

                <p className='mt-1 text-sm text-gray-300'>
                  Whitepapers are our in-depth guides to help you get the most
                  out of TasKonnect.
                </p>
              </a>

              <a
                className='block rounded-xl border border-gray-800 p-8 shadow-lg transition hover:scale-105 hover:shadow-xl'
                href='/services/digital-campaigns'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-lime-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z' />
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  />
                </svg>

                <h2 className='mt-4 text-xl font-bold text-white'>Tutorials</h2>

                <p className='mt-1 text-sm text-gray-300'>
                  With our tutorials, you can learn how to use TasKonnect to its
                  fullest potential.
                </p>
              </a>

              <a
                className='block rounded-xl border border-gray-800 p-8 shadow-lg transition hover:scale-105 hover:shadow-xl'
                href='/services/digital-campaigns'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-lime-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z' />
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  />
                </svg>

                <h2 className='mt-4 text-xl font-bold text-white'>
                  Master Guides
                </h2>

                <p className='mt-1 text-sm text-gray-300'>
                  With the help of our master guides, you can learn use
                  Taskonnect much more in-depth.
                </p>
              </a>
            </div>

            <div className='mt-12 text-center'>
              <ButtonLink href='/signup'>Get Started Today</ButtonLink>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
