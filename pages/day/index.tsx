import { NextPageLayout } from "../_app";
import {setDay} from '../../redux/slices/daySlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxTool';
import { useState } from "react";
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";


const Theme: NextPageLayout = () => {

    const dispatch = useAppDispatch();
    const DayState = useAppSelector(state => state.dayReducer.day)

    console.log('day :', DayState)


    const handleClick = () => {
        dispatch(setDay(!DayState))
    }

    return (
        <div>
            <CustomInput />
            <CustomButton/>
            
            <button className='border-solid' onClick={handleClick}> Day </button>
            <p>{ DayState ? ('it is false') : ('it is true')}</p>
        </div>
    )

}

export default Theme