import React, { use, useRef, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
   const { signIn, googleLogin } = use(AuthContext);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);
   const [showPassword, setShowPassword] = useState(false);

  


  const from = location.state?.from?.pathname || '/';

const handleGoogleLogin = () => {
    // Handle Google login logic here
    googleLogin()
      .then((result) => {
       toast.success('Login Successful in with Google!');
       navigate(from, {replace: true});
     
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`); 
      });
}

//Email/password Login Handler 
const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value; 

    // Password Validation
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

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
        toast.success('Login Successful!');

      })
      .catch((error)=>{
        toast.error(`Error: ${error.message}`);
    })
}

//Forgot Password Handler
const handleForgotPassword = () => {
const email = emailRef.current.value;
if (!email) {
  toast.error('Please enter your email First.');
  return;
}
 sendPasswordResetEmail(email)
    .then(() => {
      toast.success('Password reset email sent. Please check your inbox.');
    })
    .catch((error) => {
      toast.error(`Error: ${error.message}`);
    });
    
 }



    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">  
    <div className="card bg-base-100 py-5 w-full max-w-sm shrink-0 shadow-2xl">     
     <h1 className="text-5xl font-bold mx-15">Login now!</h1>
       
       {
        !user ? (
           <form className='card-body' onSubmit={handleLogin}>
        <fieldset className="fieldset">

          <label className="label">Email</label>
          <input type="email"
          name='email' className="input input-bordered w-full"
          value={email || ''}
          ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
          placeholder="email" />
          
         
          
          <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="input input-bordered w-full pr-10"
                  placeholder="Password"
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
          <div>

            {/* forgot password */}
            <button onClick={handleForgotPassword} type='button' className="link link-hover">Forgot password?</button></div>
          {/* Error Message */}
              {error && <p className="text-red-400 text-xs">{error}</p>}

          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <button
                onClick={handleGoogleLogin}
                type="button"
                className="btn btn-primary flex items-center justify-center gap-2 w-full"
              >
                <FaGoogle /> Login with Google
              </button>
         <p className="font-semibold text-center pt-5">
                Don't Have an Account?{' '}
                <Link to="/regester">
                  <span className="text-lg text-red-400">Register</span>
                </Link>
              </p>
        </fieldset>
        </form>
        ):(
           <p className="text-center text-green-500 mt-4">User already logged in</p>
        )
       }
      
      </div>
    </div>
  </div>

    );
};

export default Login;