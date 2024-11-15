import React, { useState } from "react"; 
import ItemInput from "./components/ItemInput";
import UpcomingExpirations from "./components/UpcomingExpirations";
import MonthlySummary from "./components/MonthlySummary";

const FoodExpirationTracker = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const calculateWastedItems = () => {
    const currentDate = new Date();
    return items.filter((item) => new Date(item.expirationDate) < currentDate);
  };

  return (
    <div>
      <h1>Food Expiration Tracker</h1>
      <ItemInput addItem={addItem} />
      <UpcomingExpirations items={items} />
      <MonthlySummary wastedItems={calculateWastedItems()} />
    </div>
  );
};

export default FoodExpirationTracker;
