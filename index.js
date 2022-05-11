const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is the first response from the server");
});
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  `mongodb+srv://dbadmin:${process.env.DB_PASS}@cluster0.vyo3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async() => {
    try{
        await client.connect();
        const services = client.db("services").collection("service");
        app.get('/', (req, res) => {
            res.send("this is the final test")
        })
        app.get('/services' , async(req, res) => {
            const query = {};
            const result = await services.find(query).toArray();
            res.send(result);
        })
    } finally{

    }
}
run().catch(console.log)

app.listen(port, () => {
  console.log("server started");
});
