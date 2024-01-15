import useCopyright from '@/utils/useCopyright';
import useFooter from '@/utils/useFooter';
import useLogo from '@/utils/useLogo';
import useSocial from '@/utils/useSocial';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {useFooter('SERVICES', {
          ['Branding']: '/service',
          ['Large Format Printing']: '/service',
          ['Outdoor Advertising']: '/service',
        })}

        {useFooter('ABOUT', {
          ['Established in 2001, SP AGENCY LTD is one of the leading advertising, multimedia & marketing agencies. The company’s office is currently located at Tesano Accra with plans far  ...']: '/about'
        })}

    

        {useFooter('CONTACT', {
          ['ACCRA Abeka Junction']: '/contact',
          ['spagency90@gmail.com']: '/contact',
          ['0302905727/0500080007']: '/contact',
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
