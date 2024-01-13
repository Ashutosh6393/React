import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
    {id: 'p1', title: 'this is product1'},
    {id: 'p2', title: 'this is product2'},
    {id: 'p3', title: 'this is product3'},
    {id: 'p4', title: 'this is product4'}
]

const Products = () => {
    return (
        <div>
            <p>This is the products page.</p>
            {PRODUCTS.map((products)=> <Link to={products.id} key={products.id}>{products.title}</Link>)}
        </div>
    );
}

export default Products;
