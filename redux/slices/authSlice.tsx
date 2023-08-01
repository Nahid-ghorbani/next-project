import { Draft, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// idle , loading

type Loading = 'idle'| 'loading' | null

export interface authData {
    username : string | null,
    password: string |null,
    id : number | null |string,
    loading: Loading ,
    error : any | null
    
}

const internalInitialState: authData = {
    username: 'admin',
    password: 'admin',
    loading: null,
    error: null,
    id: null
}



// const getAuthData = createAsyncThunk<any[]>(
//     'authorization/get-auth-data',
//     async(_:any, thunkAPI) => {
//         try {
//             const res = await axios.get('api/auth-data'),
//             const userData = await res.data

//             return userData
//         } catch(error) {return thunkAPI.rejectWithValue({error:error})}
//     }
// )


export const authSlice = createSlice({
    name:'authorization',
    initialState: internalInitialState,
    reducers: {
        reset: () => internalInitialState,
    },
    // extraReducers(builder) {

    // }

    // },
})


export const { reset } = authSlice.actions

export default authSlice.reducer;