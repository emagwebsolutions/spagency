"use client"

import Pageheader from '@/components/Pageheader';
import Yellowbox from '@/components/Yellowbox';
import Servcard from '@/components/Servcard';
import Servicebox from '@/components/Servicebox';
import Imagebg from '@/components/Imagebg';
import Productscard from '@/components/Productscard';
import Modal from '@/components/Modal';
import { useState, useEffect } from 'react';

const About = () => {
  const [getImg, setImg] = useState('');
  const [openmodal, setOpenmodal] = useState(false);

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
      <Pageheader h1="PRODUCTS" h4="The different types of products we have" />

      <section className="products">
        <div className="container">
          <Productscard
            img="1.jpg"
            handleClick={handleClick}
            title="9 x 6 Billboard"
          />
          <Productscard
            img="2.jpg"
            title="9 x 6 Billboard"
            handleClick={handleClick}
          />
          <Productscard
            img="3.jpg"
            title="9 x 6 Billboard"
            handleClick={handleClick}
          />
        </div>
      </section>

      <Imagebg>
        <Servicebox fa="" name="Branding" />
        <Servicebox fa="" name="Large Format Printing" />
        <Servicebox fa="" name="Outdoor Advertising" />
      </Imagebg>

      <Yellowbox
        img="1.jpg"
        para={`
        Established in 2001, SP AGENCY LTD is one of the leading advertising, multimedia & marketing agencies. The company’s office is currently located at Tesano Accra with plans far advanced to open another branch by end of year 2021.

        Our range of products span both outdoor and industrial markets, with offerings including out of home advertising space rentals, marketing, sales promotions, branding, and general printing and many more, while our brands “SP AGENCY” is used by various corporate and educational institutions across the region.

      Through the use of premium human resource and state of the art machinery we deliver outputs that meet global standards.
        
        
        
        
        `}
      />
    </>
  );
};

export default About;
