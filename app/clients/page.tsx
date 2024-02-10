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
      <Pageheader h1="CLIENTS" h4="Those we work with" />


<section className="clients">

<div className="container">

<div style={{
    backgroundImage: `url('/clients/1.png')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat'
  }}></div>


<div style={{
    backgroundImage: `url('/clients/2.png')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat'
  }}></div>


<div style={{
    backgroundImage: `url('/clients/3.png')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat'
  }}></div>


<div style={{
    backgroundImage: `url('/clients/4.png')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat'
  }}></div>


<div style={{
    backgroundImage: `url('/clients/5.png')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat'
  }}></div>


<div style={{
    backgroundImage: `url('/clients/6.png')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat'
  }}></div>


</div>

</section>



      <Yellowbox
        img="1.jpg"
        para={`
        stablished in 2001, SP AGENCY LTD is one of the leading advertising, multimedia & marketing agencies. The company’s office is currently located at Tesano Accra with plans far advanced to open another branch by end of year 2021.

        Our range of products span both outdoor and industrial markets, with offerings including out of home advertising space rentals, marketing, sales promotions, branding, and general printing and many more, while our brands “SP AGENCY” is used by various corporate and educational institutions across the region.

      Through the use of premium human resource and state of the art machinery we deliver outputs that meet global standards.
        
        
        
        
        `}
      />

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
