const express = require('express')
const parser = require('body-parser') //Middleware
const app = express()
const Customer = require("./models/customer")
const mongoose = require("mongoose")

const customerRoutes = require("./customer/routes")
const accountRoutes = require("./account/routes")
const transRoutes = require("./transactions/routes")

app.use(parser.json());
app.use(
    parser.urlencoded({
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

mongoose.connect(
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
