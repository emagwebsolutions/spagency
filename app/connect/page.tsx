"use client"

import Pageheader from '@/components/Pageheader';
import Yellowbox from '@/components/Yellowbox';
import Servcard from '@/components/Servcard';
import Servicebox from '@/components/Servicebox';
import Imagebg from '@/components/Imagebg';
import Productscard from '@/components/Productscard';
import Modal from '@/components/Modal';
import { useState, useEffect } from 'react';
import Contbox from '@/components/Contbox';
import Contactform from '@/components/Contactform';

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

      <Pageheader h1="CONTACT" h4="The different types of products we have" />




<section className="contact">

      <div className="container">
        <Contbox title="CONTACT US" text="0203444555/0203444555" fa="BOOK" />
        <Contbox title="CONTACT US" text="0203444555/0203444555" fa="BOOK" />
        <Contbox title="CONTACT US" text="0203444555/0203444555" fa="BOOK" />
      </div>

      <div className="container">
        <div>
          <Contactform />
        </div>
        <div></div>
      </div>



</section>


    </>
  );
};

export default About;
