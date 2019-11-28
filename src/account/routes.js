const { Router } = require('express')
//const Account = require("../models/account")
const router = Router();
const {
    createNewAccount,
    getAccountById,
    getAccounts
} = require("./controller")





router.post("/", (req, res) => {
    createNewAccount(req.body)
        .then(account => {
            console.log(account);
            return res.send("Account Created!")
        })
        .catch(err => {
            console.log(err);
        });

});



router.get("/", (req, res) => {
    getAccounts()
        .then(accounts => {
            res.send(accounts);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500)
        });
});





router.get("/:id", (req, res) => {
    getAccountById(req.params.id)
        .then(accounts => {
            res.send(accounts);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500)
        });
});






module.exports = router;