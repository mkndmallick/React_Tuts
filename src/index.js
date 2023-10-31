// import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// -------Our Pizza Data that we will render in the form of COmponent--------
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

/* Putting all components in App compenent */
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

/*-------------Header Section of the Pizza App---------------*/
function Header() {
  return (
    // <h1 style={{ color: "red", fontSize: "40px", textTransform: "uppercase" }}>
    //   Fast React Pizza CO.
    // </h1>
    <header className="header">
      <h1>Fast React Pizza CO.</h1>
    </header>
  );
}

/*---------Menu Section of the Pizza App---------------*/
// function Menu() {
//   const pizzas = pizzaData;
//   return (
//     <div className="menu">
//       <h2>Our Menu</h2>

//       {/* ------passing props entire array list using map function in the form of
//         component ie; what we called Rendering List in React-------- */}
//       {/* Here we also give an example of conditional Renderring ie; && opeartor */}
//       {pizzas && (
//         <ul className="pizzas">
//           {/* /* this is one way*/}
//           {/* ({
//              <Pizza name={pizza.name} photoName={pizza.photoName} />
//           }) */}

//           {/* Another way */}

//           {pizzaData.map((pizza) => (
//             <Pizza pizzaObj={pizza} />
//           ))}
//         </ul>
//       )}
//     </div>

/* ---------Menu Section of the Pizza App Method 2 ---------------*/
/* Here we give an another Example of Conditional Renderring ie; Ternary Operator*/
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} />
          ))}
        </ul>
      ) : null}
    </div>

    /* -------passing props manually one by one from the array list--------
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="$12"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price="$12"
      /> */
  );
}

/*----------Receiving props-------*/
// function Pizza(props) {
//   return (
//     <div className="pizza ">
//       <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
//       <li>
//         <h3>{props.pizzaObj.name}</h3>
//         <p>{props.pizzaObj.ingredients}</p>
//         <span>{props.pizzaObj.price}</span>
//       </li>
//     </div>
//   );
// }

/* Reaceving props with actual name of the props  ie; "pizzaObj" insted of giving "props"
keyword which is called "props destructuring"*/
function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/*Setting classes Conditionally with the help of Ternary Opertor and Template Literals*/}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <li>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>{" "}
        {/* Setting text conditionally with the help of Ternary Operator*/}
      </li>
    </div>
  );
}

/* ------Footer part of the Pizza App--------*/

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // we will not use this  below code beacuse its not ideal for real project
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  // return (
  //   <footer className="footer">
  //     {/* /* Here is an example Conditional Renderring ie; '&&'  */}
  //     {isOpen && (
  //       <div className="order">
  //         <p>we 're open until {closeHour}:00. Come visit us or Order Online</p>
  //         <button className="btn">Order</button>
  //       </div>
  //     )}
  //   </footer>
  // );

  /* ------Footer part of the Pizza App Method 2--------*/
  /* Here we give an another Example of Conditional Renderring ie; Ternary Operator*/
  return (
    <footer className="footer">
      {/* /* Here is an example Conditional Renderring ie; Ternary Operator  */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        /* <div className="order">
      <p>
        we 're open until {props.closeHour}:00. Come visit us or Order Online
      </p>
      <button className="btn">Order</button>
    </div> */
        <p>
          We're Happy to welcome between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

/* Taking a piece of JSX Code from Above Footer section and Converted it into component 
or we can simply call Extracting JSX into a new Component  and using this component in 
footer section*/

function Order(props) {
  return (
    <div className="order">
      <p>
        we 're open until {props.closeHour}:00. Come visit us or Order Online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

/* Note :- With he help of props we use closeHour/openHour*/
