import { instance } from "./instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const getCartAysnc = createAsyncThunk(
  "get/CartList",
  async (data, thunkAPI) => {
    try {
      const access_token = sessionStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };
      const res = await instance.get("/cart/refresh-available", config);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteCartAysnc = createAsyncThunk(
  "delete/CartList",
  async (data, thunkAPI) => {
    

    const access_token = sessionStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    try {
      const res = await instance.delete(`/cart/delete?cartId=${data.cartId}`, config);
      console.log("cartId", data.cartId);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addCartAysnc = createAsyncThunk(
  "add/CartList",
  async (data, thunkAPI) => {
    try {
      const res = await instance.post(`/cart/${data.productId}`, {
        quantity: data.quantity,
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);


export const editCartAysnc = createAsyncThunk(
  "edit/CartList",
  async (data, thunkAPI) => {
    try {

      const access_token = sessionStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };

      const res = await instance.patch(`/cart/update`, {
        cartId: data.cartId,
        quantity: data.quantity,
      },
      config
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);



export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    calcPrice: (state, action) => {
      let totalPrice = 0;
      const list = action.payload;
      list.map((item) => {
        return (totalPrice += item.price * item.quantity);
      });
      return { ...state, totalPrice: totalPrice };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartAysnc.fulfilled, (state, action) => ({
        ...state,
        cart: action.payload,
      }))
      .addCase(deleteCartAysnc.fulfilled, (state, action) => ({
        ...state,
        message: action.payload,
      }))
      .addCase(addCartAysnc.fulfilled, (state, action) => ({
        ...state,
        message: action.payload,
      }))
      .addCase(editCartAysnc.fulfilled, (state, action) => ({
        ...state,
        message: action.payload,
      }));
  },
});
export const { calcPrice } = cartSlice.actions;
