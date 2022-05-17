import * as Yup from 'yup';

export const commentObject = {
    description: '',
    date: Date.now(),
};

export const commentValidation = Yup.object({
    name: Yup.string().min(5, 'Must be 5 characters minimum.'),
    date: Yup.string().typeError('Must be a string'),
});