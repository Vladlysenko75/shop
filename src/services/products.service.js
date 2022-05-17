import {urls} from '../constants';
import {axiosService} from './axios.service';

export const productService = {
    allProducts: () => axiosService.get(urls.products).then(value => value.data),
    product: (id) => axiosService.get(urls.products.concat('/', id)).then(value => value.data),
    postNewProduct: (product) => axiosService.post(urls.products, product),
    deleteProduct: (id) => axiosService.delete(urls.products.concat('/', id)).then(value => value.data),
    updateProduct: (id, product) => axiosService.put(urls.products.concat('/', id), product).then(value => value.data)
}