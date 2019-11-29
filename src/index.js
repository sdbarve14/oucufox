import express from 'express'
import { json, urlencoded } from 'body-parser' //Middleware
const app = express()
import Customer from "./models/customer"
import { connect } from "mongoose"

import customerRoutes from "./customer/routes"
import accountRoutes from "./account/routes"
import transRoutes from "./transactions/routes"

app.use(json());
app.use(
    urlencoded({
        extended: false
    })
);

app.use("/customer", customerRoutes)
app.use("/account", accountRoutes)
app.use("/transaction", transRoutes)

/*
app.get("/",(req,res) => {
    let name = req.query.name
    return res.send(`Hello ${name}`)
})
*/


// app.post("/customer", (req, res) => {
//     let name = req.body.name
//     let mobile = req.body.mobile
//     const newCustomer = new Customer(req.body)
//     //name: name,
//     //MobileNo: mobile

//     newCustomer
//         .save()
//         .then(customer => {
//             console.log(customer);
//             return res.send("Customer Created!")
//         })
//         .catch(err => {
//             console.log(err);
//         });

// });



// app.get("/customer1", (req, res) => {
//     Customer.find({}, { name: 1, _id: 0 })
//         .then(customers => {
//             res.send(customers);
//         }).catch(err => {
//             console.log(err);
//             res.sendStatus(500)
//         });
// });




/*
app.get("/customer/:id", (req, res) => {
    Customer.findById(req.params.id, { name: 1, _id: 0 })
        .then(customers => {
            res.send(customers);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500)
        });
});
*/




app.listen(4000)

connect(
    "mongodb+srv://root:root@cluster0-pzvpn.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
).then(res => {
    console.log("Database Connected!")
    app.listen(3000, () => {
        console.log("Server Started!")
    });
}).catch(err => {
    console.log("Server Startup error!");
    console, log(err);
})
