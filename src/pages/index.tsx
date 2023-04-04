import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import {
  FaArrowRight,
  FaChartBar,
  FaCheckSquare,
  FaComment,
  FaPlusCircle,
} from 'react-icons/fa';

import GrayCard from '@/components/GrayCard';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NavLink from '@/components/links/NavLink';

import iPad from '~/images/ipad.webp';
import heroImage from '~/images/mockup.webp';
import LogoWhite from '~/svg/logo-white.svg';

export default function HomePage() {
  return (
    <Layout>
      <main className='relative'>
        <nav className='w-full p-4 pb-20'>
          <div className='container flex justify-between'>
            {/* logo  */}
            <div className='w-24'>
              <LogoWhite width={200} height={40} />
            </div>

            {/* links */}
            <div className='flex items-center gap-0'>
              <NavLink href='solutions'>Solutions</NavLink>
              <NavLink href='/pricing'>Pricing</NavLink>
              <NavLink href='/products'>Products</NavLink>
              <NavLink href='/resources'>Resources</NavLink>
            </div>

            <div className='flex items-center gap-2'>
              <NavLink href='/signin'>Sign In</NavLink>
              <ButtonLink href='/signup'>Sign Up</ButtonLink>
            </div>
          </div>
        </nav>

        {/* hero section */}
        <section className='pb-12'>
          <div className='container flex flex-col items-start gap-12'>
            <h1 className='uppercase tracking-tighter lg:text-[160px] lg:leading-[130px]'>
              Manage Your Tasks.
            </h1>
            <GrayCard>
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

          <div className='mt-12 bg-white/5 p-20'>
            <div className='container'>
              <div className='w-1/2'>
                <h2 className='mb-4 bg-gradient-to-r from-violet-700 to-sky-500 bg-clip-text text-4xl font-bold text-transparent'>
                  We're Passionate About Effective Task Management.
                </h2>
                <p>- James T, Co-Founder</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
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
          <div className='container'>
            <h2 className='mb-8 text-center'>Our Service</h2>
            <div className='grid gap-4 md:grid-cols-2'>
              <GrayCard className='hover:bg-splash flex cursor-pointer items-center justify-between'>
                <h3>Track Progress Dynamically</h3>
                <FaPlusCircle className='text-2xl text-lime-500' />
              </GrayCard>
              <GrayCard className='hover:bg-splash flex cursor-pointer items-center justify-between'>
                <h3>Manage Your Team</h3>
                <FaPlusCircle className='text-2xl text-lime-500' />
              </GrayCard>
              <GrayCard className='hover:bg-splash flex cursor-pointer items-center justify-between'>
                <h3>Get More Done</h3>
                <FaPlusCircle className='text-2xl text-lime-500' />
              </GrayCard>
              <GrayCard className='hover:bg-splash flex cursor-pointer items-center justify-between'>
                <h3>Spend Less Time Working</h3>
                <FaPlusCircle className='text-2xl text-lime-500' />
              </GrayCard>
            </div>
          </div>
        </section>

        <section className='py-20'>
          <div className='container'>
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
            <GrayCard className='p-4 px-8'>
              <div className='font-bold uppercase opacity-50'>Company</div>
            </GrayCard>
            <GrayCard className='p-4 px-8'>
              <div className='font-bold uppercase opacity-50'>Individual</div>
            </GrayCard>
            <div className='bg-splash rounded-3xl p-8 px-12'>
              <div className='text-4xl font-bold uppercase text-dark'>
                Team Work
              </div>
            </div>
            <GrayCard className='p-4 px-8'>
              <div className='font-bold uppercase opacity-50'>Management</div>
            </GrayCard>
            <GrayCard className='p-4 px-8'>
              <div className='font-bold uppercase opacity-50'>Financial</div>
            </GrayCard>
          </div>
        </section>

        <section className='py-20'>
          <div className='container'>
            <GrayCard className='px-40 py-24 text-center'>
              <h2 className='text-6xl'>
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

      <footer className='w-full p-20'>
        <div className='container flex justify-between'>
          {/* logo  */}
          <div className='w-24'>
            <LogoWhite width={200} height={40} />
          </div>

          {/* links */}
          <div className='flex items-center gap-4'>
            <Link href='/solutions'>Solutions</Link>
            <Link href='/pricing'>Pricing</Link>
            <Link href='/products'>Products</Link>
            <Link href='/resources'>Resources</Link>
          </div>

          <div className='text-xs opacity-50'>
            <span>
              © Copyright 2023. <br />
              All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
