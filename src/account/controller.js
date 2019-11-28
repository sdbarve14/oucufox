const Account = require("../models/account");

const createNewAccount = acc => {
    const newAccount = new Account(acc);
    return newAccount.save();
};


const getAccountById = id => {
    return Account.findById(id);
};


const getAccounts = () => {
    return Account.find();
};

module.exports = {
    createNewAccount: createNewAccount,
    getAccountById: getAccountById,
    getAccounts: getAccounts
}