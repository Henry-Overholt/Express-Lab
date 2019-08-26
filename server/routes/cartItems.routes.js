const express = require("express");
const cartItemsRoutes = express.Router();
const cartItems = require("./cartItems");

cartItemsRoutes.get("/cart-items", (req, res) => {
  res.send(cartItems);
});
cartItemsRoutes.post("/cart-items", (req, res) => {
  console.log(req.body);
  res.send(cartItems);
});
cartItemsRoutes.put("/cart-items/:id", (req, res) => {
  console.log(req.params.id);
  //   const index = cartItem.findIndex(cartItem => cartItem.id === req.params.id);
  //   people.splice(index, 1, req.body);
  res.send(cartItems);
});
// cartItemsRoutes.delete("/cart-items/:id", (req, res) => {
//   const index = people.findIndex(person => person.id === req.params.id);
//   people.splice(index, 1);
//   res.send(cartItems);
// });

module.exports = cartItemsRoutes;
