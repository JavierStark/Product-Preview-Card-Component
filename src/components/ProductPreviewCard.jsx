import React from 'react';
import MainImg from '../images/image-product-desktop.jpg'
import CartIcon from '../images/icon-cart.svg'
import './ProductPreviewCard.css'

const ProductPreviewCard = () => {
  return (
    <article className={"container"}>
      <div className="grid">
        <div className="img">
          <img src={MainImg} alt="product image"/>
        </div>
        <div className="card-content">
          <h6 className="product-category">Perfume</h6>
          <h2 className="product-name">Gabrielle Essence Eau De Parfum</h2>

          <p className={"product-description"}>A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of
            CHANEL.</p>
          <div className="price">
            <p className="current-price">$149.99</p>
            <p className="old-price">$169.99</p>
          </div>

          <button className={"cta"}><img src={CartIcon} alt="cart icon"/>Add to Cart</button>
        </div>
      </div>
    </article>
  );
};

export default ProductPreviewCard;