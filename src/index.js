const express = require("express"), debug = require("debug")("app"), morgan = require("morgan"), chalk = require("chalk"), path = require("path"), router = ("./routes/index.js"), PORT = process.env.PORT || 5000, app = express();

//settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs")

//middleweares
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//static files
app.use(express.static(path.join(__dirname, "/public")));

//routes
app.use(router)

app.listen(app.get("port"), _ => debug(`server on port ${PORT}`));