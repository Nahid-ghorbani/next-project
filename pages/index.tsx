import React, {useEffect} from 'react'
import Head from 'next/head'
import MainLayout from '../components/layout/MainLayout'
import type { NextPageLayout } from './_app'
import { setName } from '../redux/slices/userSlice';
import { incrementByAmount, decrement } from '../redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxTool'
import { getUsers } from '../redux/slices/userSlice';
import { use } from 'react'

const Home: NextPageLayout = () => {

  const count = useAppSelector(state => state.counterReducer.value)
  const users = useAppSelector(state => state.userReducer.users);
  const name = useAppSelector(state => state.userReducer.name)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUsers())
  },[])

  console.log('count :', count);
  console.log('name :', name);
  console.log('users :', users)

  const handleClick = () => {
    dispatch(setName("folani"));
  }

  return (
    <div>
      <span className='text-red-400'>
        nextjs typescript
      </span>

      <button onClick={handleClick}>set name</button>

      <button onClick={() => dispatch(decrement())}>count</button>

    </div>
  )
}

Home.getLayout = (page) => <MainLayout title="index page">{page}</MainLayout>
export default Home