import NavLink from '@/components/links/NavLink';

export default function MenuLinks() {
  return (
    <div className='hidden items-center gap-0 lg:flex'>
      <NavLink href='solutions'>Solutions</NavLink>
      <NavLink href='/pricing'>Pricing</NavLink>
      <NavLink href='/products'>Products</NavLink>
      <NavLink href='/resources'>Resources</NavLink>
    </div>
  );
}
