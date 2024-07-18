import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product submitted:', product);
    // Here you would typically send the data to an API
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Add Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Product Name"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Image URL"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Add Product
        </Button>
      </form>
    </Container>
  );
};

export default AddProduct;