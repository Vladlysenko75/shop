import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './AddProductForm.css';
import {useFormik} from "formik";
import {productObject, productValidation} from "../../validation/AddProductValidation";
import {postProduct} from "../../store/slices";

export const AddProductForm = ({showModal}) => {
    const [isDisabledButton, setIsDisabledButton] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: productObject,
        validationSchema: productValidation,
        onSubmit: (values) => {
            setIsDisabledButton(true)
            try {
                dispatch(postProduct(values))
            } catch (e) {
                setError(e.message)
            }
            setIsDisabledButton(false)
            showModal()
        }

    })

    return (
        <div className="addProductForm">
            <div className="addProductFormOverlay" onClick={() => showModal()}/>
            <div className="modalContent">
                <Typography gutterBottom variant="h4" component="div">
                    Add Product:
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <div className="addProductFormInputs">
                        <TextField
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            helperText={formik.errors.name}
                            error={!!formik.errors.name}
                            id="filled-basic"
                            variant="filled"
                            label="Name"
                            required
                        />
                        <TextField
                            name="imageUrl"
                            onChange={formik.handleChange}
                            value={formik.values.imageUrl}
                            helperText={formik.errors.imageUrl}
                            error={!!formik.errors.imageUrl}
                            id="filled-basic"
                            variant="filled"
                            label="Image URL"
                            required
                        />
                        <TextField
                            name="count"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.count}
                            helperText={formik.errors.count}
                            error={!!formik.errors.count}
                            id="filled-basic"
                            variant="filled"
                            label="Count"
                            required
                        />
                        <TextField
                            name="weight"
                            onChange={formik.handleChange}
                            value={formik.values.weight}
                            helperText={formik.errors.weight}
                            error={!!formik.errors.weight}
                            id="filled-basic"
                            variant="filled"
                            label="Weight"
                            required
                        />
                        <TextField
                            type="number"
                            name="size.width"
                            onChange={formik.handleChange}
                            value={formik.values.size.width}
                            id="filled-basic"
                            variant="filled"
                            label="Width"
                            required
                        />
                        <TextField
                            type="number"
                            name="size.height"
                            onChange={formik.handleChange}
                            value={formik.values.size.height}
                            id="filled-basic"
                            variant="filled"
                            label="Height"
                            required
                        />
                        <div>
                            <Button onClick={() => showModal()} style={{margin: "5px"}} variant="outlined" color="secondary">Cancel</Button>
                            <Button disabled={isDisabledButton} type="submit" variant="outlined">Add Product</Button>
                        </div>
                    </div>
                </form>

                {error && (
                    <Typography color="secondary" gutterBottom variant="h5" component="div">
                        {error}
                    </Typography>
                )}
            </div>
        </div>
    );
};
