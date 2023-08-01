import { Action, Draft, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { idle } from "../../types/redux";
import type { TIDLE, TLOADING } from '../../types/redux';
// import axios from "axios";





export interface DayState {
    day: boolean,
    error: null | any,
    loading: TIDLE | TLOADING,
}

const internalInitialState : DayState = {
    day: false,
    error: null,
    loading: idle
}

// there's no api

// export const postTheme = createAsyncThunk <any[]> (
//     'theme/postTheme',
//     async(data: any, thunkAPI) => {
//         try {
//             const res = await axios.post(`api/theme/${data}`),
//             const theme = await res.data;

//             return theme;
//         } catch (error) {
//             return thunkAPI.rejectWithValue({error:error})
//         }
//     }
// )

export const daySlice = createSlice({
    name: 'day',
    initialState: internalInitialState,
    reducers: {
        reset: () => internalInitialState(),
        setDay: (state: Draft<typeof internalInitialState>, action: PayloadAction <typeof internalInitialState>) => {
            state.day = action.payload
        }
    }
})

export const {setDay} = daySlice.actions;

export default daySlice.reducer;