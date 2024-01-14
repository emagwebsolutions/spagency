import Image from 'next/image';
import useLink from '@/utils/useLink';
import useLogo from '@/utils/useLogo';

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div>{useLogo(100, 70)}</div>

        <div>
          <ul>
            {useLink('HOME', '/')}
            {useLink('ABOUT', '/about')}
            {useLink('PRODUCTS', '/boards')}
            {useLink('SERVICES', '/services')}
            {useLink('CLIENTS', '/clients')}
            {useLink('CONNECT', '/connect')}
          </ul>
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Nav;
