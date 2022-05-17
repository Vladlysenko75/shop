import {urls} from '../constants';
import {axiosService} from './axios.service';

export const commentsService = {
    productComments: (id) => axiosService.get(urls.products.concat('/', id, urls.comment)).then(value => value.data),
    addComment: (id, comment) => axiosService.post(urls.products.concat('/', id, urls.comment), comment).then(value => value.data),
    deleteComment: (productId, commentId) => axiosService.delete(urls.products.concat('/', productId, urls.comment, '/', commentId)).then(value => value.data)
}