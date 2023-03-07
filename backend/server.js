const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config({path: './backend/config/.env'});

// connexion à la DB
connectDB();

const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Le seveur utilise les routes pour les utilisateurs
app.use("/user", require("./routes/user.routes"));

//Le serveur utilise les routes pour les posts
app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(process.env.PORT, () => console.log(`Le serveur a démarré au port ${process.env.PORT}`));
