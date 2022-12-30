import React from "react";
import "./style.css";

const purchaseData = [
  {
    name: "Soup",
    description: "Yum",
    location: "CSE Basement",
    date: "12/12/1234",
    cost: 1,
    method: "Cash",
  },
  {
    name: "Salad",
    description: "Yum",
    location: "CSE Basement",
    date: "12/12/1234",
    cost: 1,
    method: "Cash",
  },
  {
    name: "Bread",
    description: "Yum",
    location: "CSE Basement",
    date: "12/12/1234",
    cost: 1,
    method: "Cash",
  },
  {
    name: "Backpack",
    description: "Yum",
    location: "CSE Basement",
    date: "12/12/1234",
    cost: 1,
    method: "Cash",
  },
  {
    name: "Shoe",
    description: "Yum",
    location: "CSE Basement",
    date: "12/12/1234",
    cost: 100000,
    method: "Crypto",
  },
  {
    name: "Shoe",
    description: "Yum",
    location: "CSE Basement",
    date: "12/12/1234",
    cost: 100000,
    method: "Crypto",
  },
  {
    name: "Shoe",
    description: "Yum",
    location: "CSE Basement",
    date: "12/12/1234",
    cost: 100000,
    method: "Crypto",
  },
  {
    name: "Shoe",
    description: "Yum",
    location: "CSE Basement",
    date: "12/12/1234",
    cost: 100000,
    method: "Crypto",
  },
  {
    name: "Shoe",
    description: "Yum",
    location: "CSE Basement",
    date: "12/12/1234",
    cost: 100000,
    method: "Crypto",
  },
  {
    name: "Shoe",
    description: "Yum",
    location: "CSE Basement",
    date: "12/12/1234",
    cost: 100000,
    method: "Crypto",
  },
];

const ViewPurchase = () => {
  return (
    <div className="view-container">
      {purchaseData.map((purchase, index) => {
        return (
          <div className="view-item">
            <h1 className="item-title">{purchase.name}</h1>
            <h2 className="item-subtitle">{purchase.description}</h2>
            <div className="item-row">
              <p className="item-text">{purchase.location}</p>
              <p className="item-text">{purchase.date}</p>
            </div>
            <div className="item-row">
              <h2 className="item-subtitle">${purchase.cost}</h2>
              <p className="item-text">{purchase.method}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewPurchase;