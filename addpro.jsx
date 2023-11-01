import React, { useState } from 'react';
import Modal from 'react-modal';

export default function Product1() {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addProduct = () => {
    setProducts([...products, newProduct]);
    console.log("product clicked");
    closeModal();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="products">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imageUrl} alt="Product Image" />
            <h2>{product.title}</h2>
            <h3>Price: {product.price}</h3>
            <h4>Description: {product.description}</h4>
            <button style={{ width: '95%', height: '40px' }}>Contact Seller</button>
          </div>
        ))}
      </div>
      <button onClick={openModal}>Add Product</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Add Product</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newProduct.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <button onClick={addProduct}>Add</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
}
