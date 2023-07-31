import React, { useState } from 'react';
import type { NextPageLayout } from '../_app';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTool';
import { getTest, setTest } from '../../redux/slices/testSlice';



const Test: NextPageLayout = () => {

  const [value, setValue] = useState('');

  const testState = useAppSelector(state => state.testReducer.test)
  const dispatch = useAppDispatch();

  console.log('test :', testState)


  const handleClick = () => {
    dispatch(setTest(value));
    setValue('')
  }

  const apiHandleClick = () => {
    dispatch(getTest( {testId: 7, name: 'as'} ))
  }

  return (
    <div className='flex flex-col'>
      <h1>Test</h1>
      <button onClick={handleClick}>on click</button>
      <input className='border-solid border-2 border-indigo-600' type='text' value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={apiHandleClick}>get api</button>
    </div>
  )
}

export default Test