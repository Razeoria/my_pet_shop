import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, getProductById } from '../api/api';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getProducts();
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await getProductById(id);
      return data[0];
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);