type Obj = {
  img: string;
  para: string;
};
const Yellowbox = ({ img, para }: Obj) => {
  return (
    <div className="yellowbox">
      <div className="container">
        <div
          style={{
            backgroundImage: `url('/${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'none',
            height: '40rem',
          }}
        ></div>
        <div>{para}</div>
      </div>
    </div>
  );
};

export default Yellowbox;
