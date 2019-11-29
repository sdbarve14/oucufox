import Account, { findById, find, findByIdAndUpdate } from "../models/account";

const createNewAccount = acc => {
    const newAccount = new Account(acc);
    return newAccount.save();
};


const getAccountById = id => {
    return findById(id);
};


const getAccounts = () => {
    return find();
};

const updateBalance = (id, amount) => {
    return findByIdAndUpdate(id, {
        $inc: {
            balance: amount
        }
    });
};

export const createNewAccount = createNewAccount;
export const getAccountById = getAccountById;
export const getAccounts = getAccounts;
export const updateBalance = updateBalance;