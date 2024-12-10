import React from 'react';

interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const ItemDisplayPage: React.FC = () => {
  const items: Item[] = [
    { id: 1, name: 'Apple', quantity: 10, price: 1.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.5 },
    { id: 3, name: 'Orange', quantity: 15, price: 1.2 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Items List</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemDisplayPage;
