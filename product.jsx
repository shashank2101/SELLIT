import React from 'react';

export default function Product() {
  return (
    <div>
      <div className="products">
        <div className="product-card">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg" alt="Product Image" />
          <h2>Product Title</h2>
          <h3>Price: $100</h3>
          <h4>Description: This is the description of the product.</h4>
          <button style={{ width: '95%', height: '40px' }}>Contact Seller</button>
        </div>
        <div className="product-card">
          <img src="https://www.teckpot.com/22885-large_default/hp-pavilion-14-amd-ryzen-5-5625u-laptop8gb-ram512gb-ssd14fhdradeon-graphicsalexawin11-homemso202114-ec1003au.jpg" alt="Product Image" />
          <h2>Product Title</h2>
          <h3>Price: $100</h3>
          <h4>Description: This is the description of the product.</h4>
          <button style={{ width: '95%', height: '40px' }}>Contact Seller</button>
        </div>
        <div className="product-card">
          <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9355f630-53c7-4567-89b4-a788c93171ea/air-zoom-gt-jump-basketball-shoes-22QS5F.png" alt="Product Image" />
          <h2>Product Title</h2>
          <h3>Price: $100</h3>
          <h4>Description: This is the description of the product.</h4>
          <button style={{ width: '95%', height: '40px' }}>Contact Seller</button>
        </div>
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJn7b8pSv5Yl43sdSZVFVkuWCvJkM2jW6APQ&usqp=CAU" alt="Product Image" />
          <h2>Product Title</h2>
          <h3>Price: $100</h3>
          <h4>Description: This is the description of the product.</h4>
          <button style={{ width: '95%', height: '40px' }}>Contact Seller</button>
        </div>
      </div>
    </div>
  );
}
