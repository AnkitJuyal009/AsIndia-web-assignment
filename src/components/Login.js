import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
import { useUserAuth } from '../context/UserAuthContext';
import '../css/Login.css';
const Login = () => {
  const { signInWithGoogle, googleSignIn } = useUserAuth();
  const { signInWithFacebook, facebookSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/home');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate('/home');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='login'>
        <h2>SignIn with your socials</h2>
        <div className='signin-buttons'>
          <GoogleLoginButton onClick={handleGoogleSignIn} /><br/>
          <FacebookLoginButton onClick={handleFacebookSignIn} />
      </div>
    </div>
  );
};

export default Login;
