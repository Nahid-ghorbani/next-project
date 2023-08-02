import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, ButtonProps } from '@mui/material';
import Image from 'next/image';
import someImage from 'public/login.jpg'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from '../../../hooks/reduxTool';
import {postLoginData} from '../../../redux/slices/authSlice';
import mobileImage from 'public/select-product.jpg';

const FirstButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#6A27D9',
  width: '80%',
  height: '50px',
  marginTop: '30px',
});


export default function login() {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch()
  const router = useRouter();

  const checkInputLength = (username: string, password: string) => {
    if (username.length === 0 || password.length === 0) {
      return false
    }
    return true
  }
 
  const handleSubmit = () => {
    const result = checkInputLength(username, password);
    if (result){
      dispatch(postLoginData({username: username , password: password}));
      router.push('/')
    } else {console.log("invalid")}
  }    

  //  username: 'kminchelle',
  //  password: '0lelplR',

  return (
    <main className='flex h-full sm:flex-col-reverse'>
      <Box sx={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }} className='sm:h-4/6	sm:items-center sm:w-full'>
        <Box sx={{ width: '50%', height: '60%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', display: 'flex', border: '1px solid #000', borderRadius: '8px' }} className='sm:w-10/12 sm:border-none sm:justify-center md:w-10/12' >
          <h1 className='text-2xl	font-bold	 font-sans text-[#6A27D9]'>LOGIN</h1>
          <h2 className='text-base	font-normal text-center font-sans'> Discover your perfect device <br/> with our fast and on-time service! </h2>

          <TextField
            label="Username"
            id='username'
            sx={{ width: '80%', height: '40px', mb: '20px', py: '12px' }}
            className='sm:w-full sm:py-1.5 md:py-1.5'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type='text'
            label="Password"
            id='password'
            sx={{ width: '80%', height: '40px', my: '20px', py: '12px' }}
            className='sm:w-full sm:py-1.5 md:py-1.5'

            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FirstButton variant='contained' onClick={handleSubmit} className='sm:w-full font-bold'> Login </FirstButton>
          <div className='flex flex-row mt-2 text-left	'>
            <div>Forgot your password? &nbsp;</div>
            <Link href={'/user/reset'} className='text-[#6A27D9] font-bold' >Click Here.</Link>
          </div>
        </Box>
      </Box>

      <Box sx={{ width: '50%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}
      className='sm:h-2/6 sm:flex sm:items-center sm:w-full sm:justify-center'>
        <Image src={someImage} alt='login' className='w-full h-full object-cover ' />
      </Box>

    </main>
  );
}
