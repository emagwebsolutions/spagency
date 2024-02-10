import Image from 'next/image';
import useLink from '@/utils/useLink';
import useLogo from '@/utils/useLogo';
import { useState } from 'react';

const Nav = () => {
  const [show, setShow] = useState(false);

  const showBox = () => setShow(true);
  const hideBox = () => setShow(false);

  return (
    <nav>
      <div className="container">
        <div className={show ? 'logobx show' : 'logobx'}>
          {useLogo(100, 70)}
        </div>

        <div className={show ? 'navlinks show' : 'navlinks'}>
          <ul>
            {useLink('HOME', '/')}
            {useLink('ABOUT', '/about')}
            {useLink('PRODUCTS', '/products')}
            {useLink('SERVICES', '/services')}
            {useLink('CLIENTS', '/clients')}
            {useLink('CONNECT', '/connect')}
          </ul>
        </div>
      </div>
      <div
        className={show ? 'navoverlay show' : 'navoverlay'}
        onClick={hideBox}
      ></div>
      <div className="hamburger">
        <Image
          src="/hamburger.jpg"
          alt=""
          onClick={showBox}
          width="30"
          height="30"
        />
      </div>
    </nav>
  );
};

export default Nav;
