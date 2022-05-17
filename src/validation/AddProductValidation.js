import * as Yup from 'yup';

export const productObject = {
    name: '',
    count: 0,
    weight: '',
    imageUrl: '',
    size: {
        width: 0,
        height: 0
    }
};

export const productValidation = Yup.object({
    name: Yup.string().min(2, 'Must be 2 characters minimum.'),
    count: Yup.number().typeError('Must be a number'),
    weight: Yup.string().typeError('Must be a string'),
    imageUrl: Yup.string().min(4, 'Must be 4 characters minimum.'),
});