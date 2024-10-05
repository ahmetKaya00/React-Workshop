import { Carousel } from 'react-bootstrap';
import React from 'react'
import CategoryList from '../components/CategoryList.js'
import ProductList from '../components/ProductList.js'
import { Col, Row } from 'reactstrap';

const items=[
  {
  src: 'https://via.placeholder.com/1200x400?text=Slide+1',
  altText: 'Slide 1',
  caption: 'Hoşgeldiniz'
  },
  {
  src: 'https://via.placeholder.com/1200x400?text=Slide+1',
  altText: 'Slide 1',
  caption: 'Hoşgeldiniz'
  },
  {
  src: 'https://via.placeholder.com/1200x400?text=Slide+1',
  altText: 'Slide 1',
  caption: 'Hoşgeldiniz'
  },
];
function Home(){
  return(
    <div>
      <Carousel>
        {items.map((item, index)=>(
          <Carousel.Item key={index}>
            <img className='d-block w-100' src={item.src} alt={item.altText}/>        
          <Carousel.Caption>
            <h3>{item.caption}</h3>
          </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Row>
        <Col sm="3">
          <CategoryList/>
        </Col>
        <Col sm="9">
      <ProductList/>
        </Col>
      </Row>
    </div>
  );
}
export default Home;