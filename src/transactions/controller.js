const Transaction = require("../models/transactions");
const account = require("../models/account");



const createNewTrans = trans => {
    const newtrans = new Transaction(trans);

    return newtrans.save();
};


const getTransactionById = id => {

    return Transaction.findById(id);
};


const getTransactions = () => {
    return Transaction.find();
};

module.exports = {
    createNewTrans: createNewTrans,
    getTransactionById: getTransactionById,
    getTransactions: getTransactions
}