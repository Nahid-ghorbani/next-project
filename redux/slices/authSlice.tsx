import { Draft, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { loading } from "../../types/redux";
import { error } from "console";
import { type } from "os";
import thunk from "redux-thunk";

// idle , loading

type Loading = 'idle' | 'loading' | null

type Gender = 'male' | 'female' | null


export interface loginData {
    id: number | null | string,
    username: string | null,
    password: string | null,
    email: string | null,
    firstName: string | null,
    lastName: String | null,
    gender?: Gender,
    image: String
    loading: Loading,
    allData: null | any,
    isLoggedIn: boolean,
    error: any | null,

}

const internalInitialState: loginData = {
    id: null,
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    image: '',
    isLoggedIn: false,
    allData: null,
    loading: null,
    error: null
}


type PostData = {
    username: string,
    password: string
}

export const postLoginData = createAsyncThunk(
    'authorization/post-auth-data',
    async (data: PostData, thunkAPI) => {
        try {
            const res = await axios.post('https://dummyjson.com/auth/login', data)
            const userData = await res.data
            console.log(userData)

            return userData
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.response.data.message })
        }
    }
)


type PostEmail = {
    username: string,
    email: String
}

export const postRegisterEmail = createAsyncThunk(
    'authRegister/post-email',
    async (data: PostEmail, thunkAPI) => {
        try {
            const res = await axios.post('https://dummyjson.com/auth/register', data);

            const emailRegister = await res.data

            return emailRegister
        } catch (error) {
            console.log('ygutyuyuyuty', error)
            return thunkAPI.rejectWithValue({ error: error })
        }
    }
)



export const authSlice = createSlice({
    name: 'authorization',
    initialState: internalInitialState,
    reducers: {
        reset: () => internalInitialState,
    },
    extraReducers(builder) {

        builder.addCase(postLoginData.pending, (state, action) => {
            state.loading = 'loading'
        }),
            builder.addCase(postLoginData.rejected, (state, action: any) => {
                state.error = action.payload.error,
                state.loading = 'idle'
            }),
            builder.addCase(postLoginData.fulfilled, (state, action) => {
                state.loading = 'idle',
                    state.allData = action.payload
            })
    }

})


export const { reset } = authSlice.actions

export default authSlice.reducer;