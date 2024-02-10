import Imagebg from '@/components/Imagebg';
import Pageheader from '@/components/Pageheader';
import Servicebox from '@/components/Servicebox';
import Yellowbox from '@/components/Yellowbox';
import Whitebox from '@/components/Whitebox';
import Servcard from '@/components/Servcard';
import Contbox from '@/components/Contbox';
import Contactform from '@/components/Contactform';

const About = () => {
  return (
    <>
      <Pageheader h1="SERVICES" h4="What we provide" />

 

      <div className="container">
        <Servcard
          heading="Branding"
          fa="book"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quidem? Nihil dignissimos, explicabo eos illo nostrum nulla ea quia dolore tempore magni. Velit numquam soluta"
        />

        <Servcard
          heading="Large Format Printing"
          fa="book"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quidem? Nihil dignissimos, explicabo eos illo nostrum nulla ea quia dolore tempore magni. Velit numquam soluta"
        />

        <Servcard
          heading="Outdoor Advertising"
          fa="book"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quidem? Nihil dignissimos, explicabo eos illo nostrum nulla ea quia dolore tempore magni. Velit numquam soluta"
        />
      </div>
    </>
  );
};

export default About;
