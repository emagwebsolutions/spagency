type Obj = {
  children: React.ReactNode;
};
const Imagebg = ({ children }: Obj) => {
  return (
    <div className="imagebg">
      <div className="container">{children}</div>
    </div>
  );
};

export default Imagebg;
