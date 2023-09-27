import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();

  
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
            navigate('/')
            console.log(loggedInUser);
         
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