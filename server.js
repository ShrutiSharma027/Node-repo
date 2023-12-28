// const http=require ('http')
// const server=http.createServer((req,res)=>{
//     console.log("Client requested",req)
//     res.end("Welcome to home") // res.end this returns the output to the client on browser
// })
// server.listen(8000,()=>{
//     console.log("Server Started")
// })

// output -  Server Started
//When we type localhost:8000 on chrome it returns client requested on console

const http=require ('http')
const server=http.createServer((req,res)=>{
   if(req.url==='/' || req.url==='home'){
    res.end("<h1>You are on home page</h1>") //It result to client on browser
}
else if(req.url==='/about'){
    res.end("<h1>You are on about page</h1>") 
}
else if(req.url==='/contact'){
    res.end("<h1>You are on contact page</h1>")
}
else{
    res.end("<h1>Your page is not found</h1>")
}
})
server.listen(8000,()=>{                     //8000 is the value of server if you search for       localhost:8000 then you will be redirected to this page
    console.log("Server Started")
})