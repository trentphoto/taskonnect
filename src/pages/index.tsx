import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

import LogoWhite from '@/assets/svg/logo-white.svg';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <Layout>

      <main>
        <nav>
          {/* logo  */}
          <LogoWhite />

          {/* links */}
          <div>
            <Link href="/solutions">Solutions</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/products">Products</Link>
            <Link href="/resources">Resources</Link>
          </div>

          <div>
            <ButtonLink href="/signin">Sign In</ButtonLink>
            <ButtonLink href="/signup">Sign Up</ButtonLink>
          </div>

        </nav>

        {/* hero section */}
        <section>
          <h1>Manage Your Apps</h1>
          
          <div>
            <p>Sign up for updates</p>
            <form action="">
              <input type="email" name="email" id="email" placeholder="Your email address" />
              <button>Start for Free</button>
            </form>
          </div>
          <Image />

          <div>
            <h2>We're Passionate About Effective App Management.</h2>
            <p>- James T, Co-Founder</p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="rounded-2xl p-12 grid grid-cols-2">

            </div>
          </div>
        </section>


      </main>
    </Layout>
  );
}
