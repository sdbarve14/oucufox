import { Router } from 'express';
//const Customer = require("../models/customer")
const router = Router();
import { createNewCustomer, getCustomerById, getCustomers } from "./controller";





router.post("/", (req, res) => {
    createNewCustomer(req.body)
        .then(customer => {
            console.log(customer);
            return res.send("Customer Created!")
        })
        .catch(err => {
            console.log(err);
        });

});



router.get("/", (req, res) => {
    getCustomers()
        .then(customers => {
            res.send(customers);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500)
        });
});





router.get("/:id", (req, res) => {
    getCustomerById(req.params.id)
        .then(customers => {
            res.send(customers);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500)
        });
});






export default router;