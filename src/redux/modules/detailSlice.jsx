import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "./instance";

const initialState = {};

export const loadProductThunk = createAsyncThunk(
  "product/loadProduct",
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(`/product/${data}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProductThunk.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default detailSlice;
