import React from 'react';
import {useDispatch} from 'react-redux';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {deleteProduct} from "../../store/slices";

export const DeleteModal = ({deleteCurrentProduct, id}) => {
    const dispatch = useDispatch();

    return (
        <div className="addProductForm">
            <div onClick={() => deleteCurrentProduct()} className="addProductFormOverlay"/>
            <div className="modalContent">
                <Typography gutterBottom variant="h4" component="div">
                    Are you sure want to delete this product?
                </Typography>
                <div>
                    <Button onClick={() => deleteCurrentProduct()} color="primary" size="small">Cancel</Button>
                    <Button onClick={() => dispatch(deleteProduct(id))} color="secondary" size="small">Delete</Button>
                </div>
            </div>
        </div>
    );
};
