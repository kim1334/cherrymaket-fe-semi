import { instance } from "./instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const postProductAsync = createAsyncThunk(
  "post/postProduct",
  async (data, thunkAPI) => {
    try {
      const res = await instance.post("/product", data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const getProductAsync = createAsyncThunk(
  "get/AllProduct",
  async (thunkAPI) => {
    try {
      const res = await instance.get("/product");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getPieceProductAsync = createAsyncThunk(
  "get/PeiceProdut",
  async () => {
    try {
      const res = await instance.get("/product/list");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postProductAsync.fulfilled, (state, action) => ({
        ...state,
        data: action.payload,
      }))
      .addCase(getProductAsync.fulfilled, (state, action) => {
        return (state = action.payload);
      })
      .addCase(getPieceProductAsync.fulfilled, (state, action) => ({
        ...state,
        data: action?.payload.data.concat(state.data),
        isLoading: false,
      }))
      .addCase(getPieceProductAsync.pending, (state, action) => ({
        ...state,
        isLoading: true,
      }));
  },
});

export default productSlice;
