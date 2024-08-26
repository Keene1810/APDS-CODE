import express from "express";

//set the port
const PORT = 3000;
const app = express();
const urlprefix = "/api";

app.use(express.json());

app.get(urlprefix+"/",(req,res)=>{
    res.send("I am finally getting this to work")
})

app.get(urlprefix+"/orders",(req,res)=>{
    const orders = [
        {
            id:"1",
            name: "orange"
        },
        {
            id:"2",
            name: "Apple"
        },
        {
            id:"3",
            name: "Pear"
        }
    ]
    res.json(
        {
            message: "Fruits",
            orders: orders
        }
    )
})

app.listen(PORT);