const express= require("express");
require("./db/config");
const User = require("./db/User");
const cors = require("cors");
const app = express();
const port = 80;

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("server is running")
})
app.post("/login", async(req,res)=>{
    let user = new User(req.body)
    let result = await user.save();
    res.send(result);
})
app.listen(port,() => {
    console.log(`server is running on ${port}`);
})