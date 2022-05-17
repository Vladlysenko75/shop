import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import {Comment} from './Comment/Comment';
import {getComments, getSingleProduct} from '../../store/slices';
import {UpdateProductForm} from "../UpdateProductForm/UpdateProductForm";
import {CommentForm} from "./CommentForm/CommentForm";

export const ProductDescription = () => {
    const [showUpdateProduct, setShowUpdateProduct] = useState(false);
    const [showCommentForm, setShowCommentForm] = useState(false);

    const showUpdateForm = () => {
        setShowUpdateProduct(!showUpdateProduct)
    }

    const showPostComment = () => {
        setShowCommentForm(!showCommentForm)
    }

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleProduct(id))
        dispatch(getComments(id))
    }, [dispatch, id])

    const {product} = useSelector(state => state['productsReducer']);
    const {comments} = useSelector(state => state['commentsReducer']);


    const {name, count, imageUrl, weight , size} = product;

    return (
        <Card sx={{ maxWidth: 800, marginTop: "25px" }}>
            <CardMedia
                component="img"
                height="400"
                image={imageUrl}
                alt="product"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Name: {name}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div">
                    Count: {count}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div">
                    Width: {size?.width}, Height: {size?.height}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div">
                    Weight: {weight}g
                </Typography>
                {comments && (
                    <>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Comments:
                        </Typography>
                        {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                    </>
                )}
            </CardContent>
            <CardActions>
                <Button onClick={() => showUpdateForm()} size="small">Edit</Button>
                <Button onClick={() => showPostComment()}  size="small">Add comment</Button>
            </CardActions>
            {showUpdateProduct && <UpdateProductForm setShowUpdateProduct={setShowUpdateProduct}/>}
            {showCommentForm && <CommentForm showPostComment={showPostComment} />}
        </Card>
    );
};
