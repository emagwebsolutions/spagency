import { createPortal } from 'react-dom';

const Modalbox = ({ img }: { img: string }) => (
  <div className="modal-overlay">
    <div
      style={{
        backgroundColor: 'white',
        padding: '2rem',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        width: '40%',
        height: '40rem',
      }}
    ></div>
  </div>
);

const Modal = ({ img }: { img: string }) => {
  return createPortal(
    <Modalbox img={img} />,
    document.getElementById('modal') as Element
  );
};

export default Modal;
