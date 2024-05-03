import React, { useState } from 'react';
import './CandyShop.css';

function CandyShop() {
  const [candies, setCandies] = useState([]);
  const [newCandy, setNewCandy] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCandy({
      ...newCandy,
      [name]: value
    });
  };

  const addCandy = () => {
    if (newCandy.name && newCandy.description && newCandy.price) {
      setCandies([...candies, newCandy]);
      setNewCandy({
        name: '',
        description: '',
        price: ''
      });
    } else {
      alert("Please enter valid candy details.");
    }
  };

  const handleAddOne = (index) => {
    // Add one to the quantity of the candy at the specified index
    const updatedCandies = [...candies];
    updatedCandies[index].quantity = (updatedCandies[index].quantity || 0) + 1;
    setCandies(updatedCandies);
  };

  const handleAddTwo = (index) => {
    // Add two to the quantity of the candy at the specified index
    const updatedCandies = [...candies];
    updatedCandies[index].quantity = (updatedCandies[index].quantity || 0) + 2;
    setCandies(updatedCandies);
  };

  const handleAddThree = (index) => {
    // Add three to the quantity of the candy at the specified index
    const updatedCandies = [...candies];
    updatedCandies[index].quantity = (updatedCandies[index].quantity || 0) + 3;
    setCandies(updatedCandies);
  };

  return (
    <div>
      <h1>Candy Shop</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Candy Name"
          value={newCandy.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newCandy.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newCandy.price}
          onChange={handleChange}
        />
        <button onClick={addCandy}>Add Candy</button>
      </div>
      <div>
        {candies.map((candy, index) => (
          <div key={index}>
            <h2>{candy.name}</h2>
            <p>{candy.description}</p>
            <p>Price: ${candy.price}</p>
            <p>Quantity: {candy.quantity || 0}</p>
            <button onClick={() => handleAddOne(index)}>Add One</button>
            <button onClick={() => handleAddTwo(index)}>Add Two</button>
            <button onClick={() => handleAddThree(index)}>Add Three</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CandyShop;
