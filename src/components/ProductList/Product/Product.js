import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import {DeleteModal} from "../../DeleteModal/DeleteModal";
import './Products.css';

export const Product = ({product}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const deleteCurrentProduct = () => {
        setShowDeleteModal(!showDeleteModal)
    }

    const {imageUrl, name, id} = product;

    return (
        <Card sx={{ maxWidth: 345 , margin: "10px"}}>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/${id}`} style={{textDecoration: "none"}}>
                    <Button size="small">To Product</Button>
                </Link>
                <Button onClick={() => deleteCurrentProduct()} color="secondary" size="small">Delete</Button>
            </CardActions>
            {showDeleteModal && (<DeleteModal id={id} deleteCurrentProduct={deleteCurrentProduct}/>)}
        </Card>
    );
};
