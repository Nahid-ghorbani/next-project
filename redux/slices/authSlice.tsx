import { Draft, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface authData {
    username : string,
    password: string 
}

const internalInitialState: authData = {
    username: 'admin',
    password: 'admin',
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
        setAuthorization: (state : Draft<typeof internalInitialState>, action: PayloadAction<typeof internalInitialState>) => {
            state.username = action.payload
        }
    },
    // extraReducers(builder) {

    // }

    // },
})