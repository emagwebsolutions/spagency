const Contactform = () => {
  return (
    <div className="contactform">
      <h4>GET IN TOUCH</h4>

      <div className="form-control">
        <label htmlFor="">Full Name</label>
        <input type="text" />
      </div>

      <div className="form-control">
        <label htmlFor="">Company</label>
        <input type="text" />
      </div>

      <div className="form-control">
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>

      <div className="form-control">
        <label htmlFor="">Phone</label>
        <input type="text" />
      </div>

      <div className="form-control">
        <label htmlFor=""></label>
        <textarea placeholder="Your Message"></textarea>
      </div>

      <button>SEND</button>
    </div>
  );
};

export default Contactform;
