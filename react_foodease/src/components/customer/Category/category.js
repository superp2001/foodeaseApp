import React from 'react';
import { Link } from 'react-router-dom';
import northindian from './northindian.png';
import southindian from './southindian.png';
import chinese from './chinese.png';
import dessert from './dessert.png';
import './category.css';

function Category() {
  return (
    <div className='container'>
      <div className="row mt-4 pl-4">
        <div className="col-md-3">
          <Link to="/restaurant/north-indian" className="card-link" style={{ textDecoration: 'none' }}>
            <div className="card food-cat">
              <div className="text-center">
                <img src={northindian} alt="North Indian" className="card-img-top p-4" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mt-2 mb-0">North Indian</h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link to="/restaurant/south-indian" className="card-link" style={{ textDecoration: 'none' }}>
            <div className="card">
              <div className="text-center">
                <img src={southindian} alt="South Indian" className="card-img-top p-4" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mt-2 mb-0">South Indian</h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3">
          <Link to="/restaurant/chinese" className="card-link" style={{ textDecoration: 'none' }}>
            <div className="card">
              <div className="text-center">
                <img src={chinese} alt="Chinese" className="card-img-top p-4" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mt-2 mb-0">Chinese</h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3 category">
          <Link to="/restaurant/dessert" className="card-link" style={{ textDecoration: 'none' }}>
            <div className="card">
              <div className="text-center">
                <img src={dessert} alt="Desserts" className="card-img-top p-4" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mt-2 mb-0">Desserts</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
