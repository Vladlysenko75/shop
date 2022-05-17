import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {commentObject, commentValidation} from "../../../validation/AddCommentValidation";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {postComment} from "../../../store/slices";
import {useParams} from "react-router-dom";

export const CommentForm = ({showPostComment}) => {
    const [isDisabledButton, setIsDisabledButton] = useState(false);
    const [error, setError] = useState();
    const {id} = useParams();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: commentObject,
        validationSchema: commentValidation,
        onSubmit: (comment) => {
            setIsDisabledButton(true)
            try {
                dispatch(postComment({id, comment}))
            } catch (e) {
                setError(e.message)
            }
            setIsDisabledButton(false)
            showPostComment();
        }

    })

    return (
        <div className="addProductForm">
            <div className="addProductFormOverlay" onClick={() => showPostComment()}/>
            <div className="modalContent">
                <Typography gutterBottom variant="h4" component="div">
                    Add Comment:
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <div className="addProductFormInputs">
                        <TextField
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            helperText={formik.errors.description}
                            error={!!formik.errors.description}
                            id="filled-basic"
                            variant="filled"
                            label="Description"
                            required
                        />
                        <div>
                            <Button style={{margin: "5px"}} disabled={isDisabledButton} type="submit" variant="outlined">
                                Add Comment
                            </Button>
                            <Button onClick={() => showPostComment()} variant="outlined" color="secondary">Cancel</Button>

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
