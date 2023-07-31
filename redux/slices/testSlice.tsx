import {
  Draft,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { idle, loading } from '../../types/redux';
import type { TIDLE, TLOADING } from '../../types/redux';



export interface TestState {
  test: null | string | number,
  error: null | any,
  loading: TIDLE | TLOADING,
}

const internalInitialState: TestState = {
  test: null,
  error: null,
  loading: idle
};

export const getTest = createAsyncThunk<any[]>(
  'test/getTest',
  async (data: any, thunkAPI) => {
    try {
      const res = await axios.get(`api/tests/${data.testId}/${data.name}`);
      const tests = res.data
  
      return tests;
      
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
)


export const testSlice = createSlice({
  name: "test",
  initialState: internalInitialState,
  reducers: {
    reset: () => internalInitialState,
    // setTest
    setTest : (state: TestState, action: PayloadAction<typeof internalInitialState>) => {
      state.test = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(getTest.pending, (state, action) => {
      state.loading = loading
    }),
    builder.addCase(getTest.rejected, (state,action)=> {
      state.loading = idle,
      state.error = action.error
    }),
    builder.addCase(getTest.fulfilled, (state, action) => {
      state.loading = idle,
      state.test = action.payload
    })
  }
});

export const { setTest } = testSlice.actions

export default testSlice.reducer;