import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, ButtonProps } from '@mui/material';
import Image from 'next/image';
import someImage from 'public/login.jpg'
import Link from 'next/link';
import { styled } from '@mui/material/styles';

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
  marginTop: '67px',
});

export default function login() {

  const [username, setUsername] = useState<string>('')

  return (
    <main className='flex h-full'>
      <Box sx={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <Box sx={{ width: '50%', height: '60%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', display: 'flex', border: '1px solid #000', borderRadius: '8px' }}>
          <h1 className='text-2xl	font-sans'>LOGIN</h1>
          <h2 className='text-base	font-sans'> Lorem Ipsum is simply dummy </h2>

          <TextField label="Username" id='username' sx={{ width: '80%', height: '40px', my: '20px', py: '12px' }}
            onChange={(e) => setUsername(e.target.value)} />
          <TextField type='password' label="Password" id='password' sx={{ width: '80%', height: '40px', my: '20px', py: '12px' }} />

          <FirstButton> Login </FirstButton>
          <div className='flex flex-row'>
            <div>Forgot your password?</div>
            <Link href={'/reset-password'}>Click Here.</Link>
          </div>
        </Box>
      </Box>

      <Box sx={{ width: '50%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'  }}>
        <Image src={someImage} alt='login' className='w-full h-full object-cover	' />
      </Box>
      
    </main>
  );
}
