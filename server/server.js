const express = require("express");
const app = express();
const port = 5000;
const cartItemsRoutes = require("./routes/cartItems.routes");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/", cartItemsRoutes);

app.listen(5000, () => console.log(`Server running on port:${port} `));

app.get("/", (req, res) => res.send("hello"));
