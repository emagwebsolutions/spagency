import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

type PT = (name: string, curpath: string)=> React.ReactNode

const useLink: PT = ( name, curpath ) => {
  const path = usePathname();

  const active = path === curpath ? 'active' : '';
  return (
    <li>
      <Link href={curpath} className={active}>{name}</Link>
    </li>
  );
};

export default useLink;
