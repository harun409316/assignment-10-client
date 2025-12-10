import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../Pages/Loading/Loading';
import { Navigate } from 'react-router';

const PrivateRout = ({children}) => {
    const { user, loading} = use(AuthContext);
if(loading){
    return <Loading></Loading>
}
if(user && user?.email){
    return children;
}
  
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRout;