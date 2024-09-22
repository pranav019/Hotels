// Express is a popular web framework for Node.js that provides a robust set of tools for building web applications. It simplifies tasks like routing, handling HTTP requests and responses, and managing middleware, making it a popular choice for Node.js developers.
const express = require("express");
const app = express();
// importing the db.js file, the connection to MongoDB must be established within that file, likely using mongoose.connect()
const db = require("./db");
// Body-parser is a Node.js middleware that parses incoming request bodies. It's essential for handling JSON or URL-encoded data in your Express applications, allowing you to access and process data sent from clients AS DATA CAN BE ANY FORMAT SENT BY : LIKE HTML, XML, FORM-DATA ETC
const bodyParser = require("body-parser");
//The bodyParser.json() middleware is applied to the Express app, instructing it to parse the request body as JSON.
app.use(bodyParser.json());

// ----------------------------------------------------------------------

// 1. Landing page
app.get("/", function (req, res) {
  res.send("Welcome To Our Restraunt !!!");
});

// 2. To get the details (Post the forum) : this is of POST : in personRoutes file
//3. To show the data on the ui :: This is of GET: in personRoutes file
// 4.1 Menu items getting data ::  in menuRoutes file:-
// 4.2 menu items ::  in menuRoutes file:-
// 5 Work type api : Parameterized work type : in personRoutes file

// Importing Routes file
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);
// 2. Menu Routes
const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);

// Final Call
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
