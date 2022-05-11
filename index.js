const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 500;

app.use(cors());
app.use(express.json())

app.get('/' , (req, res) => {
    res.send("this is the first response from the server");
})
app.listen(port ,()=> {
    console.log("server started");
})