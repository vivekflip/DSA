// const http=require('http');
// const data=require("./data");
// http.createServer((req,res)=>{
//       res.writeHead(200,{'Content-type':'application\json'});
//       res.write(JSON.stringify(data));
//       res.end();
// }).listen(5500);

// const express = require("express");

  




   
// const fs=require("fs")
// const path=require("path");
// const dirPath=path.join(__dirname,'files');
// console.log(dirPath)
// for(i=0;i<5;i++)
// {
// fs.writeFileSync(dirPath+"/vivghhhhggek.txt","hello my name is vivek kumar singh");
// }


// let a=10;
// let b=0;

// let wait=new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//             resolve(30)
//       },2000)
// })

// wait.then((data)=>{
//       b=data;
//       console.log(a+b);
// })


// const express=require('express');
// const app=express();

// const reqFilter=(req,resp,next)=>{
//       // console.log("hello");
//       if(!req.query.age)
//       {
//             resp.send("please provide  name")
//       }
//       else if(req.query.age<18){
//             resp.send("you are not allowed")
//       }
//       else{
//             next();
//       }
// }

//       // app.use(reqFilter);

//       app.get('/',reqFilter,(res,resp)=>{
//             resp.send("welcome to  home page")
//       });
//       app.get('/user',(req,resp)=>{
//             resp.send("welcome to  user page")
//       });
     
// app.listen(5000)


 
// console.warn(dbconnect());
// dbconnect().then((resp)=>{
//       resp.find().toArray().then((data)=>{
//             console.warn(data)
//       })
// })



// const dbconnect=require('./mongodb')
// const main =async ()=>{
//       let data=await dbconnect();
//       data =await data.find().toArray();
//       console.warn(data);
// }
// main();

