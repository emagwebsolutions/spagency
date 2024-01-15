import Card from '@/components/Card';
import Excerptox from '@/components/Excerptox';
import Headeroverlay from '@/components/Headeroverlay';
import Youtubebox from '@/components/Youtubebox';

export default function Home() {
  const services = [
    {
      _id: 1,
      fa: '',
      title: 'Branding',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos accusantium quasi iure iste reiciendis ',
      link: '/service',
      linktext: 'Learn more',
    },
    {
      _id: 2,
      fa: '',
      title: 'Large Format Printing',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos accusantium quasi iure iste reiciendis ',
      link: '/service',
      linktext: 'Learn more',
    },
    {
      _id: 3,
      fa: '',
      title: 'Outdoor Advertising',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos accusantium quasi iure iste reiciendis ',
      link: '/service',
      linktext: 'Learn more',
    },
  ];

  const gallery = [
    {
      name: '',
      imag: '/1.jpg',
    },
    {
      name: '',
      imag: '/2.jpg',
    },
    {
      name: '',
      imag: '/3.jpg',
    },
    {
      name: '',
      imag: '/4.jpg',
    },
    {
      name: '',
      imag: '/5.jpg',
    },
    {
      name: '',
      imag: '/6.jpg',
    },
    {
      name: '',
      imag: '/7.jpg',
    },
  ];

  return (
    <>
      <section className="header">
        <div></div>
        <Headeroverlay
          title="S.P AGENCY"
          caption="Give your business the presence it deserves with S.P AGENCY"
        />
      </section>

      <section className="sec2">
        <div>
          {services.map(({ fa, title, excerpt, link, linktext }, k) => (
            <Card
              key={k}
              fa={fa}
              title={title}
              excerpt={excerpt}
              link={link}
              linktext={linktext}
            />
          ))}
        </div>

        <div className="container">
          <Excerptox
            title="Who we are"
            excerpt="
            
            Established in 2001, SP AGENCY LTD is one of the leading advertising, multimedia & marketing agencies. The company’s office is currently located at Tesano Accra with plans far advanced to open another branch by end of year 2021.

            Our range of products span both outdoor and industrial markets, with offerings including out of home advertising space rentals, marketing, sales promotions, branding, and general printing and many more, while our brands “SP AGENCY” is used by various corporate and educational institutions across the region.
            
            "
            btn1_name="Contact us"
            btn2_name="Learn more"
            btn1_link="/contact"
            btn2_link="/about"
          />

          <Youtubebox url="https://www.youtube.com" />
        </div>
      </section>

      <section className="sec3">
        <div className="container">
          <div>
            <h2>WE ARE YOUR TRUSTED PARTNER</h2>

            <div>
              with our target locations all over Ghana, you can reach out to
              consumers you want to speak to the most, becoming a part of where
              your customers work. Our high-quality billboards are carefully
              located to maximise your exposure with specifically targeted
              messages. S.P Agency had decades of experience in outdoor branding
              and we will help you create the right campaign for your brand to
              make your voice heard, right where you need it to be.
            </div>
          </div>
        </div>
      </section>

      <section className="sec4">
        <h2>OUR WORKS</h2>
        <div className="container"></div>
      </section>
    </>
  );
}
