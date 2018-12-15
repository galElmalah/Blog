const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const postsRoutes = require("./routes/posts");
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/posts", postsRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server running listening on port ${port}`));
