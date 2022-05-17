import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productService} from "../../services/products.service";

export const getProducts = createAsyncThunk(
    'productsSlice/getProducts',
    async (_, {rejectWithValue}) => {
        try {
            return await productService.allProducts()
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const getSingleProduct = createAsyncThunk(
    'productsSlice/getSingleProduct',
    async (id, {rejectWithValue}) => {
        try {
            return await productService.product(id)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const postProduct = createAsyncThunk(
    'productsSlice/postProduct',
    async (product, {rejectWithValue}) => {
        try {
            return await productService.postNewProduct(product)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const deleteProduct = createAsyncThunk(
    'productsSlice/deleteProduct',
    async (productId, {rejectWithValue}) => {
        try {
            return await productService.deleteProduct(productId)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const updateProduct = createAsyncThunk(
    'productsSlice/updateProduct',
    async ({id, product}, {rejectWithValue}) => {
        try {
            console.log(product)
            return await productService.updateProduct(id, product)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        products: [],
        product: {},
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.products = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [postProduct.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [postProduct.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.products.push(action.payload.data)
        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [deleteProduct.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.products = state.products.filter(product => product.id !== action.payload.id);
        },
        [deleteProduct.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [getSingleProduct.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getSingleProduct.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.product = action.payload;
        },
        [getSingleProduct.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        [updateProduct.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [updateProduct.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.product = action.payload;
        },
        [updateProduct.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
    }
})

const productsReducer = productsSlice.reducer;

export default productsReducer;