import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';
import ProductItem from '../components/ProductItem.js';
import { Col, Row } from 'reactstrap';

function ProductList(){
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    const {addToCart} = React.useContext(CartContext);

    useEffect(()=>{
        const url = category ==='all' || !category ? `https://fakestoreapi.com/products` : `https://fakestoreapi.com/products/category/${category}`;

        fetch(url)
        .then(response => response.json())
        .then(data => setProducts(data));
    }, [category])

    return(
        <div>
            <h1>{category}</h1>
            <Row>
                {products.length > 0 ? (
                    products.map(product =>(
                        <Col sm="4" key={product.id} className='mb-4'>
                            <ProductItem product={product} addToCart={addToCart}/>
                        </Col>
                    ))
                ): (
                    <p>No product avaible in this category</p>
                )}
            </Row>
        </div>
    );

}
export default ProductList;