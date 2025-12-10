import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';

const Regester = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const email = form.email.value;

    if (name.length < 5) {
      setNameError('Name should be more than 5 characters');
      return;
    } else {
      setNameError('');
    }

    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter.');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must contain at least one lowercase letter.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setError('');

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate('/');
            toast.success('Register successful!');
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
         <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse"> 
         <div className="card bg-base-100 py-5 w-full max-w-sm shrink-0 shadow-2xl"> 
      <h1 className="text-3xl font-bold text-center mt-4 mx-15">Register now!</h1>
        <form onSubmit={handleSignup} className="card-body">
          <fieldset className="fieldset space-y-2">
            <label className="label">Name</label>
            <input type="text" name="name" className="input input-bordered w-full" required />
            {nameError && <p className="text-xs text-error">{nameError}</p>}

            <label className="label">Photo</label>
            <input type="text" name="photo" className="input input-bordered w-full" required />

            <label className="label">Email</label>
            <input type="email" name="email" className="input input-bordered w-full" required />

            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="input input-bordered w-full pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {error && <p className="text-xs text-error">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Register
            </button>

            <p className="font-semibold text-center pt-5">
              Already have an account?{' '}
              <Link to="/login">
                <span className="text-lg text-red-400">Login</span>
              </Link>
            </p>
          </fieldset>
        </form>
          </div>
       
      </div>
    </div>
  );
};

export default Regester;
