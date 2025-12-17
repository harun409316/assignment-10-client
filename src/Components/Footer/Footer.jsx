import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
 
   return (
     <>
       <footer className="footer sm:footer-horizontal mt-10 bg-base-300 text-base-content p-10">
 <div>
    <h2 className='text-4xl '>ARTIFY</h2>
 </div>
  <nav>
    <h6 className="footer-title">Contact Info</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">ArtWord</a>
    <a className="link link-hover">Artist info</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
     <Link to='https://x.com/'>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path d="M18.244 2H21.5l-7.81 8.93L23 22h-6.074l-4.77-6.174L6.5 22H3.243l8.39-9.594L1 2h6.163l4.243 5.545L18.244 2zm-2.145 17.298h1.707L7.01 4.6H5.176l10.923 14.698z" />
  </svg>
</Link>

      <Link to='https://www.youtube.com/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </Link>
      <Link to='https://www.facebook.com/HARUN409316'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </Link>
    </div>
  </nav>
</footer>
 {/* ---- COPYRIGHT FIXED ---- */}
            <div className="bg-base-300 py-4 text-center">
                <p className="text-base-content">
                    Copyright © {new Date().getFullYear()} - All right reserved
                </p>
            </div>
  </>
    );


   
};

export default Footer;