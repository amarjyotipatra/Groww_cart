const express=require("express");

const app=express();

app.use(express.json());

const Cart=require("../models/cart.model");


app.get("/", async (req, res) => {
    try{
  const cart = await Cart.find().lean().exec();
  return res.status(200).render("cart.ejs",{ cart});
} catch (e) {
  res.status(501).send({ message: e.message, status: "Failed" });
}
});


app.delete("/:id", async (req, res) => {
    try{
  const cart = await Cart.findByIdAndDelete(req.params.id,{new:true}).lean().exec();
  return res.status(200).render("view/cart.ejs",{ cart });
} catch (e) {
  res.status(501).send({ message: e.message, status: "Failed" });
}
});

module.exports=app;