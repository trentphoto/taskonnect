import Link from 'next/link';
import { useState } from 'react';

import GrayCard from '@/components/GrayCard';
import Layout from '@/components/layout/Layout';
import SubmittedFormContent from '@/components/SubmittedFormContent';

export default function SignInPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Layout>
        <div className='container mb-60'>
          <GrayCard className=''>
            {submitted ? (
              <SubmittedFormContent />
            ) : (
              <>
                <h1 className='mb-5 text-center'>Welcome Back</h1>
                <div className='mx-auto flex max-w-md flex-col items-center text-center'>
                  <p className='mb-8 text-sm uppercase tracking-wider'>
                    Sign in to the best task management app ever.
                  </p>

                  <form
                    action=''
                    onSubmit={handleSubmit}
                    className='mb-4 flex flex-col gap-4 self-stretch'
                  >
                    <div className='flex flex-col gap-4'>
                      <input
                        className='border-b border-white/40 border-l-transparent border-r-transparent border-t-transparent bg-transparent pl-0'
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Your email address'
                      />
                      <input
                        className='border-b border-white/40 border-l-transparent border-r-transparent border-t-transparent bg-transparent pl-0'
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Your password'
                      />
                    </div>
                    <button
                      type='submit'
                      className='bg-splash justify-center rounded-xl px-4 py-2 font-bold text-gray-900 transition-transform duration-75 hover:scale-105'
                    >
                      Sign In
                    </button>
                  </form>
                  <p>
                    Or{' '}
                    <Link href='/signup' className='font-bold'>
                      Sign Up
                    </Link>
                  </p>
                </div>
              </>
            )}
          </GrayCard>
        </div>
      </Layout>
    </>
  );
}
