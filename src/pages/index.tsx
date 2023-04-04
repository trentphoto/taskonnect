import Image from 'next/image';
import * as React from 'react';
import {
  FaArrowRight,
  FaChartBar,
  FaCheckSquare,
  FaComment,
  FaPlusCircle,
} from 'react-icons/fa';

import Footer from '@/components/Footer';
import GrayCard from '@/components/GrayCard';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Navbar from '@/components/Navbar';

import iPad from '~/images/ipad.webp';
import heroImage from '~/images/mockup.webp';

export default function HomePage() {
  return (
    <Layout>
      <main className='relative'>
        <Navbar />

        {/* hero section */}
        <section className='pb-12'>
          <div className='container flex flex-col items-start gap-12 p-4'>
            <h1 className='w-2/3 text-4xl uppercase tracking-tighter lg:w-full lg:text-[160px] lg:leading-[130px]'>
              Manage Your Tasks.
            </h1>
            <GrayCard className='w-full md:w-auto'>
              <h3 className='mb-6'>Sign up for updates</h3>
              <form action='' className='flex items-center gap-2'>
                <input
                  className='mr-4 border-b border-white/40 border-l-transparent border-r-transparent border-t-transparent bg-transparent pl-0'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Your email address'
                />
                <div className='bg-splash flex h-16 w-16 cursor-pointer items-center justify-center rounded-full p-4'>
                  <FaArrowRight className='text-2xl text-gray-900' />
                </div>
              </form>
            </GrayCard>

            <Image
              src={heroImage}
              alt='Hero Image'
              width={800}
              height={800}
              className='absolute -right-80 top-20 lg:-right-20 lg:top-60'
            />
          </div>

          <div className='mt-12 bg-white/5 p-8 py-20 md:px-20'>
            <div className='container'>
              <div className='sm:w-1/2'>
                <h2 className='mb-4 bg-gradient-to-r from-violet-700 to-sky-500 bg-clip-text text-4xl font-bold text-transparent'>
                  We're Passionate About Effective Task Management.
                </h2>
                <p>- James T, Co-Founder</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container p-4'>
            <GrayCard className='grid gap-8 shadow-xl md:grid-cols-2'>
              <div>
                <Image src={iPad} alt='iPad' width={800} height={800} />
              </div>
              <div>
                <h3 className='mb-2 text-3xl font-bold uppercase'>
                  Best Seller Product
                </h3>
                <p className='mb-6 text-sm'>
                  Our most popular product is the best way to manage your tasks.
                </p>
                <div className='mx-4 mb-2 flex justify-between border-b border-white/10 py-4'>
                  <span>Track Progress Dynamically</span>
                  <FaArrowRight className='text-lg text-lime-500' />
                </div>
                <div className='mx-4 mb-2 flex justify-between border-b border-white/10 py-4'>
                  <span>Manage Your Team</span>
                  <FaArrowRight className='text-lg text-lime-500' />
                </div>
                <div className='mx-4 mb-2 flex justify-between border-b border-white/10 py-4'>
                  <span>Get More Done</span>
                  <FaArrowRight className='text-lg text-lime-500' />
                </div>
                <ButtonLink className='mt-6' href='/signup'>
                  Start for Free
                </ButtonLink>
              </div>
            </GrayCard>
          </div>
        </section>

        <section className='py-20'>
          <div className='container p-4'>
            <h2 className='mb-8 text-center'>Our Service</h2>
            <div className='grid gap-4 md:grid-cols-2'>
              <GrayCard className='hover:bg-splash flex cursor-pointer items-center justify-between shadow-lg'>
                <h3>Track Progress Dynamically</h3>
                <FaPlusCircle className='text-2xl text-lime-500' />
              </GrayCard>
              <GrayCard className='hover:bg-splash flex cursor-pointer items-center justify-between shadow-lg'>
                <h3>Manage Your Team</h3>
                <FaPlusCircle className='text-2xl text-lime-500' />
              </GrayCard>
              <GrayCard className='hover:bg-splash flex cursor-pointer items-center justify-between shadow-lg'>
                <h3>Get More Done</h3>
                <FaPlusCircle className='text-2xl text-lime-500' />
              </GrayCard>
              <GrayCard className='hover:bg-splash flex cursor-pointer items-center justify-between shadow-lg'>
                <h3>Spend Less Time Working</h3>
                <FaPlusCircle className='text-2xl text-lime-500' />
              </GrayCard>
            </div>
          </div>
        </section>

        <section className='py-20'>
          <div className='container p-4'>
            <div className='grid gap-12 md:grid-cols-5'>
              <div className='col-span-2'>
                <h2 className='mb-2 text-3xl font-bold uppercase'>
                  Industry-standard tooling
                </h2>
                <p className='mb-6 text-sm'>
                  Our most popular product is the best way to manage your tasks.
                </p>
                <div className='border-b border-white/50 py-4'>
                  <div className='mb-2 flex items-center gap-2'>
                    <FaChartBar className='text-xl' />
                    <h3>Track Progress Dynamically</h3>
                  </div>
                  <p>Visualize all your tasks in one place.</p>
                </div>
                <div className='border-b border-white/50 py-4'>
                  <div className='mb-2 flex items-center gap-2'>
                    <FaComment className='text-xl' />
                    <h3>Keep Your Team Informed</h3>
                  </div>
                  <p>Update your team on the progress of your tasks.</p>
                </div>
                <div className='py-4'>
                  <div className='mb-2 flex items-center gap-2'>
                    <FaCheckSquare className='text-xl' />
                    <h3>Don't Miss A Deadline</h3>
                  </div>
                  <p>Meet all your deadlines with ease.</p>
                </div>
              </div>
              <div className='col-span-3'>
                <Image
                  src={iPad}
                  alt='iPad'
                  width={800}
                  height={800}
                  className='opacity-80'
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='flex items-center justify-center gap-8'>
            <GrayCard className='!p-4 !px-8'>
              <div className='font-bold uppercase opacity-50'>Company</div>
            </GrayCard>
            <GrayCard className='!p-4 !px-8'>
              <div className='font-bold uppercase opacity-50'>Individual</div>
            </GrayCard>
            <div className='bg-splash rounded-3xl p-8 px-12'>
              <div className='text-4xl font-bold uppercase text-dark'>
                Team Work
              </div>
            </div>
            <GrayCard className='!p-4 !px-8'>
              <div className='font-bold uppercase opacity-50'>Management</div>
            </GrayCard>
            <GrayCard className='!p-4 !px-8'>
              <div className='font-bold uppercase opacity-50'>Financial</div>
            </GrayCard>
          </div>
        </section>

        <section className='py-20'>
          <div className='container p-4'>
            <GrayCard className='px-10 py-24 text-center lg:px-40'>
              <h2 className='text-4xl lg:text-6xl'>
                Get everything done with{' '}
                <span className='bg-gradient-to-r from-violet-700 to-sky-500 bg-clip-text text-transparent'>
                  TasKonnect
                </span>
              </h2>
              <ButtonLink className='mt-6' href='/signup'>
                Start for Free
              </ButtonLink>
            </GrayCard>
          </div>
        </section>
      </main>

      <Footer />
    </Layout>
  );
}
