import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(location.state?.from?.pathname);

  
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'LOGIN SUCCESSFUL',
                showConfirmButton: false,
                timer: 1500
              })
            console.log(loggedInUser);
            navigate(from, { replace: true });
         
        })
        .catch((error) => console.log(error));
    }
    return (
        <div className=''>
            <div className="divider"></div> 
            <h1 className='text-center text-xl font-bold pb-5 font-serif'>Social Login</h1>
            <div className="ml-[30px]">
            <button onClick={handleGoogleLogin} className='btn btn-outline bg-yellow-950 text-white w-[94%] mx-auto '>Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;