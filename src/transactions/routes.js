const { Router } = require('express')
//const Account = require("../models/account")
const router = Router();
const {
    createNewTrans,
    getTransactionById,
    getTransactions
} = require("./controller")





router.post("/", (req, res) => {
    createNewTrans(req.body)
        .then(account => {
            console.log(account);
            return res.send("Trnsaction Done!")
        })
        .catch(err => {
            console.log(err);
        });

});



router.get("/", (req, res) => {
    getTransactions()
        .then(accounts => {
            res.send(accounts);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500)
        });
});





router.get("/:id", (req, res) => {
    getTransactionById(req.params.id)
        .then(accounts => {
            res.send(accounts);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500)
        });
});






module.exports = router;