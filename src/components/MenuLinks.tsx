import NavLink from '@/components/links/NavLink';

export default function MenuLinks() {
  return (
    <div className='hidden items-center gap-0 lg:flex'>
      <NavLink href='/'>Home</NavLink>
      <NavLink href='/customers'>Customers</NavLink>
      <NavLink href='/pricing'>Pricing</NavLink>
      <NavLink href='/resources'>Resources</NavLink>
    </div>
  );
}
