import useCopyright from '@/utils/useCopyright';
import useFooter from '@/utils/useFooter';
import useLogo from '@/utils/useLogo';
import useSocial from '@/utils/useSocial';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {useFooter('SERVICES', {
          ['Media Planning']: '/media',
          ['Our Billboard']: '/media',
          ['Count on us']: '/media',
        })}

        {useFooter('SERVICES', {
          ['Media Planning']: '/media',
          ['Our Billboard']: '/media',
          ['Count on us']: '/media',
        })}

        {useFooter('SERVICES', {
          ['Media Planning']: '/media',
          ['Our Billboard']: '/media',
          ['Count on us']: '/media',
        })}
      </div>

      <div>
        {useLogo(60, 50)}
        {useSocial({
          ['facebook']: 'https://www.facebook.com',
          ['twitter']: 'https://www.twitter.com',
          ['instagram']: 'https://www.instagram.com',
        })}

        {useCopyright({
          start_date: '2024-02-11',
          comp_name: 'S.P Agency',
        })}
      </div>
    </footer>
  );
};

export default Footer;
