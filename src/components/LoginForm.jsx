import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaEye, FaEyeSlash, FaKey } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { login } from '../actions/auth.actions';
import { useFeedback } from '../contexts/FeedbackContext';
import Logo from './Logo';

function LoginForm() {
  const navigate = useNavigate();
  const { showToast } = useFeedback();
  const [showPassword, setShowPassword] = useState(false);
  const schema = object({
    email: string()
      .email('Provide a valid email address')
      .required('Email is required'),
    password: string().required('Password is required'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'admin@admin.com',
      password: 'admin1234',
    },
  });

  const handleLogin = async (data) => {
    if (await login(data)) {
      showToast({ type: 'success', message: 'Login successful' });
      navigate('/dashboard');
    } else {
      showToast({ type: 'error', message: 'Login failed' });
    }
  };
  return (
    <div className="flex flex-col gap-5 items-center justify-center md:border md:border-transparent md:rounded-xl w-full m-5 md:w-1/2 lg:w-1/3 max-w-lg py-10 px-5 md:shadow-xl md:shadow-primary md:bg-transparent/10">
      <div className="flex flex-col gap-1 items-center">
        <Logo />
        <h1 className="text-2xl font-semibold text-center">
          <span className="text-primary ">Happy</span> to see you again!
        </h1>
        <p className="text-lg text-center">Please sign in.</p>
      </div>
      <form
        className="flex flex-col gap-10 w-full"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="flex flex-col gap-5 w-full">
          <div>
            <label
              className={`input input-bordered flex items-center gap-2 ${
                errors.email ? 'input-error' : ''
              }`}
            >
              <FaEnvelope className={`text-primary`} />
              <input
                type="text"
                className="grow font-semibold"
                placeholder="Email"
                {...register('email', {
                  required: 'Email Address is required',
                })}
              />
            </label>
            <p role="alert" className="text-error font-bold mt-1">
              {errors?.email?.message}
            </p>
          </div>
          <div>
            <label
              className={`input input-bordered flex items-center gap-2 ${
                errors.password ? 'input-error' : ''
              }`}
            >
              <FaKey className="text-primary" />
              <input
                type={!showPassword ? 'text' : 'password'}
                className="grow font-semibold"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
              />
              {showPassword ? (
                <FaEye
                  className="text-primary"
                  onClick={() => setShowPassword((cur) => !cur)}
                />
              ) : (
                <FaEyeSlash
                  className="text-primary font-bold"
                  onClick={() => setShowPassword((cur) => !cur)}
                />
              )}
            </label>
            <p role="alert" className="text-error font-bold mt-1">
              {errors?.password?.message}
            </p>
          </div>
        </div>
        <button className="btn btn-primary btn-outline">Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
