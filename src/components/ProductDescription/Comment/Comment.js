import React from 'react';
import Typography from "@mui/material/Typography";

import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import {deleteComment} from "../../../store/slices";

export const Comment = ({comment}) => {
    const dispatch = useDispatch();

    const {date, description, productId, id: commentId} = comment;

    return (
        <>
            <Typography variant="body2" color="text.secondary">
                Date: {date} <br/>
                Description: {description}
            </Typography>
            <Button onClick={() => dispatch(deleteComment({productId, commentId}))} color="secondary" size="small">Delete Comment</Button>
        </>

    );
};
