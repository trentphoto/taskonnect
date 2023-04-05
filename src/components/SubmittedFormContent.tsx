import Link from 'next/link';

export default function SubmittedFormContent() {
  return (
    <>
      <h1 className='mb-4 text-center'>You've seen it all!</h1>
      <div className='mx-auto mb-10 block h-1 w-24 bg-lime-500'></div>
      <div className='mx-auto flex max-w-xl flex-col items-center text-center'>
        <p className='mb-4'>
          Congratulations - you've reached the limit of my portfolio site. As
          you may have guessed, TasKonnect is a fictional product.
        </p>
        <p>
          Thanks for exploring the site, and feel free to explore my other work
          via my website,{' '}
          <Link href='https://jamestrent.net' className='font-bold'>
            jamestrent.net
          </Link>
          .
        </p>
      </div>
    </>
  );
}
