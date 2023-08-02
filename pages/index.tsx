import React, {useEffect} from 'react'
import Head from 'next/head'
import MainLayout from '../components/layout/MainLayout'
import type { NextPageLayout } from './_app'
import { setName } from '../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxTool'
import { getUsers } from '../redux/slices/userSlice';
import { use } from 'react'

const Home: NextPageLayout = () => {

  const users = useAppSelector(state => state.userReducer.users);
  const name = useAppSelector(state => state.userReducer.name)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUsers())
  },[])

  console.log('name :', name);
  console.log('users :', users)

  const handleClick = () => {
    dispatch(setName("folani"));
  }

  return (
    <div>
      Home page


    </div>
  )
}

Home.getLayout = (page) => <MainLayout title="index page">{page}</MainLayout>
export default Home