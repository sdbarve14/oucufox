import Transaction, { findById, find } from "../models/transactions";
import account from "../models/account";
import { updateBalance } from "../account/controller";


const createNewTrans = async trans => {
    const newtrans = new Transaction(trans);
    let createdTrans = await newtrans.save();
    if (trans.type == "debit") {
        await updateBalance(trans.account, trans.amount * -1);
    } else {
        await updateBalance(trans.account, trans.amount);
    }
    return createdTrans.populate("account").execPopulate();
};


const getTransactionById = id => {

    return findById(id);
};


const getTransactions = () => {
    return find();
};

export const createNewTrans = createNewTrans;
export const getTransactionById = getTransactionById;
export const getTransactions = getTransactions;