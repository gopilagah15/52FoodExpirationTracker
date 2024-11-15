import React from "react";

const UpcomingExpirations = ({ items }) => {
  const currentDate = new Date();
  const upcomingItems = items.filter((item) => {
    const expDate = new Date(item.expirationDate);
    return expDate > currentDate && expDate <= new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  });

  return (
    <div>
      <h2>Upcoming Expirations</h2>
      <ul>
        {upcomingItems.length > 0 ? (
          upcomingItems.map((item, index) => (
            <li key={index}>
              {item.name} - Expires on {item.expirationDate}
            </li>
          ))
        ) : (
          <p>No items expiring within the next 7 days!</p>
        )}
      </ul>
    </div>
  );
};

export default UpcomingExpirations;
