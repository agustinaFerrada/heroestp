const express = require('express');
const app = expres();
const port = 3030;
const path = require('path');
app.use(express.static('public'))
app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','index.html')));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','bernel-lee.html')));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','clarke.html')));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','babbage.html')));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','hamilton.html')));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','hooper.html')));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','lovelace.html')));
app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','turing.html')));
app.get('*',(req,res)=> res.sendFile(path.join(__dirname,'views','error404.html')));