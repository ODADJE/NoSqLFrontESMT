import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { object, string } from 'yup';

function UserForm({ submit, update = false, user, setUser }) {
  const [showPassword, setShowPassword] = useState(false);
  const schema = update
    ? object({
        name: string().required('Name is required').min(3),
        email: string()
          .email('Provide a valid email address')
          .required('Email is required'),
      })
    : object({
        name: string().required('Name is required').min(3),
        email: string()
          .email('Provide a valid email address')
          .required('Email is required'),
        password: string()
          .required('Password is required')
          .min(8, 'Provide 8 characters or more'),
      });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
  });
  console.log(user);
  return (
    <div>
      <form
        method="dialog"
        className="flex flex-col gap-10 w-full"
        onSubmit={handleSubmit((data) => submit(data, reset))}
      >
        <div className="flex flex-col gap-5 w-full">
          <div>
            <label
              className={`input input-bordered flex items-center gap-2 ${
                errors.name ? 'input-error' : ''
              }`}
            >
              <input
                type="text"
                className="grow font-semibold"
                placeholder="Name"
                {...register('name', {
                  required: 'Name is required',
                })}
              />
            </label>
            <p role="alert" className="text-error font-bold mt-1">
              {errors?.name?.message}
            </p>
          </div>
          {/*  */}
          <div>
            <label
              className={`input input-bordered flex items-center gap-2 ${
                errors.email ? 'input-error' : ''
              }`}
            >
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
          {!update && (
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 ${
                  errors.password ? 'input-error' : ''
                }`}
              >
                <input
                  type={!showPassword ? 'text' : 'password'}
                  className="grow font-semibold"
                  placeholder="Password"
                  {...register('password')}
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
          )}
        </div>
        <button className="btn btn-primary btn-outline">
          {!update ? 'Add' : 'Update'}
        </button>
      </form>
      <div className="modal-action">
        <form method="dialog">
          <button
            className="btn"
            onClick={() => {
              reset();
              setUser(null);
            }}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
