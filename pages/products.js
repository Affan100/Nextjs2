import MainLayout from '../layouts/MainLayout';
import AddProductFrom from '../components/AddProductFrom';
import Product from '../components/Products';
import { useState } from 'react';


const ProductsPage = () => {

    const [products, setproducts] = useState([]);

    const heandleCreate = (data) => {
        products.push(data);
        setproducts([...products]);
    }

    return (
        <MainLayout>
            <h3>ADD New Product</h3>
            <AddProductFrom onCreate={heandleCreate} />
            <h3>Product List</h3>
            {
                products.map((item, index) => {
                    return (
                        <Product data={item} />
                    )
                })
            }
        </MainLayout>
    )
}

export default ProductsPage;