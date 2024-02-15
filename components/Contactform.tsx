import { useForm } from 'react-hook-form';
import Errorbox from './Errorbox';
import axios from 'axios'

const Contactform = () => {
  type FS = {
    fullname: string;
    company: string;
    email: string;
    phone: string;
    message: string;
  };

  const form = useForm({
    defaultValues: {
      fullname: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const submitForm = (data: FS) => {




    console.log(data);
  };

  return (
    <div className="contactform">
      <h4>GET IN TOUCH</h4>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-control">
          <input
            type="text"
            placeholder=""
            {...register('fullname', {
              required: {
                value: true,
                message: 'Fullname field required!',
              },
            })}
          />
          <label htmlFor="">Full Name</label>
          <Errorbox err={errors?.fullname?.message} />
        </div>

        <div className="form-control">
          <input
            type="text"
            placeholder=""
            {...register('company', {
              required: {
                value: true,
                message: 'Company field required!',
              },
            })}
          />
          <label htmlFor="">Company</label>
          <Errorbox err={errors?.company?.message} />
        </div>

        <div className="form-control">
          <input
            type="text"
            placeholder=""
            {...register('email', {
              required: {
                value: true,
                message: 'Email field required!',
              },
            })}
          />
          <label htmlFor="">Email</label>
          <Errorbox err={errors?.email?.message} />
        </div>

        <div className="form-control">
          <input
            type="text"
            placeholder=""
            {...register('phone', {
              required: {
                value: true,
                message: 'Phone field required!',
              },
            })}
          />
          <label htmlFor="">Phone</label>
          <Errorbox err={errors?.phone?.message} />
        </div>

        <div className="form-control">
          <textarea
            placeholder="Your Message"
            {...register('message', {
              required: {
                value: true,
                message: 'Message field required!',
              },
            })}
          ></textarea>
                  <Errorbox err={errors?.message?.message} />
        </div>

        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default Contactform;
