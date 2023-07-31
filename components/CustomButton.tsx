import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';



function CustomButton(props) {
  return (
    <div className='flex justify-center'>
    <Button variant="contained" color="primary" disableElevation> CLICK HERE!</Button>
    </div>
    )
}


export default CustomButton;