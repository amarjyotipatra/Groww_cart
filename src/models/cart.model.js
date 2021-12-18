const {Schema,model}= require("mongoose");

//Cart
const cartSchema = new Schema({});

module.exports= model("cart", cartSchema);