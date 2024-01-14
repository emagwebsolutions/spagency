import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div>
          <Image src="/logo.jpg" alt="Logo" width="8" height="7" />
        </div>

        <div>
          <ul className="flex">
            <li>
              <Link href="/" >HOME</Link>
            </li>
            <li>
              <Link href="/" >HOME</Link>
            </li>
            <li>
              <Link href="/" >HOME</Link>
            </li>
            <li>
              <Link href="/" >HOME</Link>
            </li>
            <li>
              <Link href="/" >HOME</Link>
            </li>
            <li>
              <Link href="/" >HOME</Link>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Nav;
