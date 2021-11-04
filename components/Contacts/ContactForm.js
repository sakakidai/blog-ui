import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from '../../lib/axios';

const schema = yup
  .object({
    lastName: yup.string().required('性は必須です'),
    firstName: yup.string().required('名は必須です'),
    email: yup
      .string()
      .required('メールアドレスは必須です')
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        { message: 'メールアドレスが有効ではありません' }
      ),
    subject: yup.string().required('件名は必須です'),
    content: yup.string().required('内容は必須です'),
  })
  .required();

const ContactForm = ({ handleOpenFrash }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (inquiry) => {
    const response = await axios
      .post('/inquiries', { inquiry })
      .catch((error) => {
        return error.response;
      });
    window.scrollTo(0, 0);
    handleOpenFrash(response);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg'>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 p-3'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xm font-bold mb-1'
            htmlFor='grid-first-name'
          >
            性（必須）
          </label>
          <input
            {...register('lastName')}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
              errors.lastName?.message ? 'border-red-500' : ''
            }`}
            placeholder='山田'
          />
          <p className='text-red-500 text-xs italic'>
            {errors.lastName?.message}
          </p>
        </div>

        <div className='w-full md:w-1/2 p-3'>
          <label className='block uppercase tracking-wide text-gray-700 text-xm font-bold mb-1'>
            名（必須）
          </label>
          <input
            {...register('firstName')}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.firstName?.message ? 'border-red-500' : ''
            }`}
            placeholder='太郎'
          />
          <p className='text-red-500 text-xs italic'>
            {errors.firstName?.message}
          </p>
        </div>

        <div className='w-full p-3'>
          <label className='block uppercase tracking-wide text-gray-700 text-xm font-bold mb-1'>
            メールアドレス（必須）
          </label>
          <input
            {...register('email')}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.email?.message ? 'border-red-500' : ''
            }`}
            placeholder='********@gmail.com'
          />
          <p className='text-red-500 text-xs italic'>{errors.email?.message}</p>
        </div>

        <div className='w-full p-3'>
          <label className='block uppercase tracking-wide text-gray-700 text-xm font-bold mb-1'>
            件名（必須）
          </label>
          <input
            {...register('subject')}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.subject?.message ? 'border-red-500' : ''
            }`}
            placeholder='100文字以下'
          />
          <p className='text-red-500 text-xs italic'>
            {errors.subject?.message}
          </p>
        </div>

        <div className='w-full p-3'>
          <label className='block uppercase tracking-wide text-gray-700 text-xm font-bold mb-1'>
            内容（必須）
          </label>
          <textarea
            {...register('content')}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              errors.content?.message ? 'border-red-500' : ''
            }`}
            rows='10'
            placeholder='400文字以下'
          />
          <p className='text-red-500 text-xs italic'>
            {errors.content?.message}
          </p>
        </div>

        <div className='flex flex-col items-center w-full p-3'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-3 w-52 my-2'
          >
            送信
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
