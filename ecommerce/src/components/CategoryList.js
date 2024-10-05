import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

function CategoryList(){
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=>response.json())
        .then(data => setCategories(data));
    }, []);

    return(
        <div>
            <h2>Categories</h2>
            <ListGroup>
                <ListGroupItem style={{marginRight: '1rem'}}>
                    <Link to="/">All</Link>
                </ListGroupItem>
                {categories.map(category=>(
                    <ListGroupItem key={category} style={{marginRight: '1rem'}}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
}
export default CategoryList;