import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories, getCategoryById } from '../api/api';

export const loadGroups = createAsyncThunk(
    'catalogManager/loadGroups',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getCategories();
            return response.data.map(group => ({
                ...group,
                image: `http://localhost:3333${group.image}`,
            }));
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const loadGroupDetails = createAsyncThunk(
    'catalogManager/loadGroupDetails',
    async (groupId, { rejectWithValue }) => {
        try {
            const response = await getCategoryById(groupId);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);