const { model, Schema } = require("mongoose");

const customerSchema = Schema({
    name: {
        type: String,
        required: true
    },
    MobileNo: {
        type: String,
        required: true
    }
})


const customerModel = model("customer", customerSchema)

module.exports = customerModel;