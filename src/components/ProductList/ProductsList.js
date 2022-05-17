import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {AddProductForm} from '../AddProductForm/AddProductForm';
import {getProducts} from '../../store/slices';
import {Product} from './Product/Product';
import './ProductList.css';

export const ProductsList = () => {
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [up, setUp] = useState(1)
    const [down, setDown] = useState(-1)

    const showModal = () => {
        setShowAddProduct(!showAddProduct);
    }

    const [type, setType] = React.useState('desc');

    const handleChange = (event) => {
        setType(event.target.value);
        if (type === 'asc') {
            setUp(1)
            setDown(-1)
        }
        if (type === 'desc') {
            setUp(-1)
            setDown(1)
        }
    };

    const dispatch = useDispatch();
    const {products} = useSelector(state => state['productsReducer']);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch, type])

    return (
        <div className="productsList">
            <div className="products">
                <Button style={{marginTop: "15px"}} onClick={() => showModal()} variant="outlined">Add Product</Button>
                <Box sx={{ minWidth: 120, height: "15px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Sort"
                            onChange={handleChange}
                        >
                            <MenuItem value={'desc'}>Ascending</MenuItem>
                            <MenuItem value={'asc'}>Descending</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            {showAddProduct && (<AddProductForm showModal={showModal}/>)}
            <div className="products">
                {products.slice().sort(function(a, b) {
                    const nameA = a.name.toLowerCase(),
                        nameB = b.name.toLowerCase()
                    if (nameA < nameB)
                        return down
                    if (nameA > nameB)
                        return up
                    return 0
                }).map(product => <Product key={product.id} product={product}/>)}
            </div>
        </div>
    );
};
