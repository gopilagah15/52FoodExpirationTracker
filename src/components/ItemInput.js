import React, { useState } from "react";

const ItemInput = ({ addItem }) => {
  const [name, setName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && expirationDate) {
      addItem({ name, expirationDate });
      setName("");
      setExpirationDate("");
    }
  };

  return (
    <div>
      <h2>Add Perishable Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ItemInput;
