//jshint esversion:6
const express=require("express");
const bodyParser= require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html");

});
app.get("/bmicalculator",function(req,res)
{
  res.sendFile(__dirname+"/bmiCalculator.html");

});
app.post("/",function(req,res)
{
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;
  //console.log(req.body);
  res.send("the result of the calculator is"+result);

});
app.post("/bmiCalculator",function(req,res)
{
  var w=Number(req.body.w);
  var h=Number(req.body.h);
  var n= w/(h*h);
  //console.log(req.body);
  res.send("the result of the calculator is"+n);

});
app.listen(3000,function()
{
  console.log("server is running on port 3000");

});
