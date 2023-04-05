import Link from 'next/link';

import GrayCard from '@/components/GrayCard';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';

export default function SignUpPage() {
  return (
    <>
      <Layout>
        <div className='container'>
          <GrayCard className=''>
            <h1 className='mb-5 text-center'>Let's Get Started</h1>
            <div className='mx-auto flex max-w-md flex-col items-center text-center'>
              <p className='mb-4 text-sm uppercase tracking-wider'>
                Welcome to the best task management app ever.
              </p>
              <p className='mb-8'>Enter your best email to begin.</p>

              <form action='' className='mb-4 flex flex-col gap-4 self-stretch'>
                <div className='flex flex-col gap-4'>
                  <input
                    className='border-b border-white/40 border-l-transparent border-r-transparent border-t-transparent bg-transparent pl-0'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Your email address'
                  />
                </div>
                <ButtonLink href='#' className='justify-center'>
                  Sign In
                </ButtonLink>
              </form>
              <p>
                Or{' '}
                <Link href='/signup' className='font-bold'>
                  Sign Up
                </Link>
              </p>
            </div>
          </GrayCard>
        </div>
      </Layout>
    </>
  );
}
