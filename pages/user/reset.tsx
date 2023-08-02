import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, ButtonProps } from '@mui/material';
import Image from 'next/image';
import someImage from 'public/login.jpg'
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from '../../hooks/reduxTool';
import {postRegisterEmail} from '../../redux/slices/authSlice'

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

export default function ResetPassword() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');

const dispatch = useAppDispatch()

  const handleSubmit = () => {

    dispatch(postRegisterEmail({username: username, email: email })).then()
  }


  return (
    <main className='flex h-full sm:flex-col-reverse'>
        <Box sx={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }} className='sm:h-4/6	sm:items-center sm:w-full'>
        <Box sx={{ width: '50%', height: '60%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', display: 'flex', border: '1px solid #000', borderRadius: '8px' }} className='sm:w-10/12 sm:border-none sm:justify-center md:w-10/12' >
          <h1 className='text-2xl	font-bold	 font-sans text-[#6A27D9]'>Reset Password</h1>
          <h2 className='text-base	font-normal text-center font-sans'> It seems like you've forgotten your password. </h2>

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
            label="Email"
            id='email'
            sx={{ width: '80%', height: '40px', my: '20px', py: '12px' }}
            className='sm:w-full sm:py-1.5 md:py-1.5'

            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FirstButton variant='contained' onClick={handleSubmit} className='sm:w-full font-bold'> Reset Password </FirstButton>
          <div className='flex flex-row mt-2 text-left	'>
            <div>Back to login page? &nbsp;</div>
            <Link href={'/user/login'} className='text-[#6A27D9] font-bold' >Click Here.</Link>
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
