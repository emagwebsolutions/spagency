type TT = {
  title: string;
  caption: string;
};

const Headeroverlay = ({ title, caption }: TT) => {
  return (
    <div className="headeroverlay">
      <h1 className="">{title}</h1>
      <h4 className="">{caption}</h4>
    </div>
  );
};

export default Headeroverlay;
