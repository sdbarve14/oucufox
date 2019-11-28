const { model, Schema } = require("mongoose");


const transactionSchema = Schema({
    type: {
        type: String,
        required: true,
        enum: ["debit", "credit"]
    },
    amount: {
        type: String,
        required: true
    },
    accountid: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "account"
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    }

})


const transactionModel = model("transaction", transactionSchema)

module.exports = transactionModel;