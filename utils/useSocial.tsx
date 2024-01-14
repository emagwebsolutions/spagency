import Link from 'next/link';

const useSocial = ({ ...rest }) => {
  const items = Object.entries(rest).map(([fa, link], k) => (
    <Link href={link} key={k}>
      <i className={`fa fa-${fa} fa-lg`}>a</i>
    </Link>
  ));

  return <div className="social-media">{items}</div>;
};

export default useSocial;
