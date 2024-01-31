'use client';

import Card from '@/components/Card';
import Excerptox from '@/components/Excerptox';
import Headeroverlay from '@/components/Headeroverlay';
import Modal from '@/components/Modal';
import Youtubebox from '@/components/Youtubebox';
import { useEffect, useState } from 'react';

export default function Home() {
  const [openmodal, setOpenmodal] = useState(false);

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

  type GALLERY = {
    name: string;
    img: string;
  }[];

  const gallery: GALLERY = [
    {
      name: '',
      img: '/gallery/1.jpg',
    },
    {
      name: '',
      img: '/gallery/2.jpg',
    },
    {
      name: '',
      img: '/gallery/3.jpg',
    },
    {
      name: '',
      img: '/gallery/4.jpg',
    },
    {
      name: '',
      img: '/gallery/5.jpg',
    },
    {
      name: '',
      img: '/gallery/6.jpg',
    },
    {
      name: '',
      img: '/gallery/7.jpg',
    },
  ];

  const singleimg = gallery.splice(0, 1);

  const [getImg, setImg] = useState('');

  const handleClick = (e: any) => {
    e.preventDefault();
    const img = e.target.dataset.img;
    setImg(img);
    setOpenmodal(true);
  };

  useEffect(() => {
    if (openmodal) {
      document.body.style.overflow = 'hidden';
    }
  }, [openmodal]);

  return (
    <>
      <Modal img={getImg} openmodal={openmodal} setOpenmodal={setOpenmodal} />
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
        <div className="container">
          <div
            data-img={singleimg[0].img}
            onClick={handleClick}
            className="bigimg"
            style={{
              backgroundImage: `url(${singleimg[0].img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '40rem',
              cursor: 'pointer',
            }}
          ></div>
          <div>
            {Object.values(gallery).map((v, k) => {
              return (
                <div
                  data-img={v.img}
                  onClick={handleClick}
                  key={k}
                  style={{
                    backgroundImage: `url(${v.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    width: '100%',
                    height: '19.6rem',
                    cursor: 'pointer',
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
