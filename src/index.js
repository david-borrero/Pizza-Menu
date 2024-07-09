import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// To do inline css, we have to enter in javascript mode and then create an object with the css

function Header() {
  //   const style = {
  //     color: "red",
  //     fontSize: "48px",
  //     textTransform: "uppercase",
  //   };

  return (
    <header className="header">
      <h1 /*style={style}*/>Fast React Pizza Co.</h1>
    </header>
  );
}

// The condition on a conditional rendering using && should be always true or false, never a number

function Menu() {
  // const pizzas = pizzaData.filter((pizza) => pizza.soldOut !== true);
  const pizzas = pizzaData;

  // React Fragment ==> <> "Our code" </> or <React.Fragment> "Our code" </React.Fragment>

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzas ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working in our menu. Please come back later!</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  const { name, ingredients, photoName, price, soldOut } = pizzaObj;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order close={closeHour} />
      ) : (
        <p>
          We are closed right now, we are opened between {openHour}:00 and{" "}
          {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ close }) {
  return (
    <div className="order">
      <p>
        We're currently open until {close}:00. Come visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);