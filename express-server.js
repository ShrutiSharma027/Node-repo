// Install express first npm i express


const users=require('./MOCK_DATA.json')
const http=require ('http')
const express=require ('express')
const app=express();
app.get('/api/users',(req,res)=>{          //get is a method
    return res.json(users)
})
app.get('/',(req,res)=>{                   //get is a method
    return res.end("<h1>Home page</h1>")
})
app.get('/api/users/:id',(req,res)=>{
    // const id=req.params.id
    // const user=users.find((user)=> user.id == id)      //== is used to check values 
    const id=parseInt(req.params.id)
    const user=users.find((user)=> user.id === id)        //=== is used to check value with data type
    return res.json(user)
})
app.get('/about',(req,res)=>{
    return res.end("<h1>About page</h1>")
})
app.get('/contact',(req,res)=>{
    return res.end("<h1>Contact page</h1>")
})
app.get('/search',(req,res)=>{
    // console.log(req.query)
    return res.end(`Search for ${req.query.name}`)
})
app.get('/*',(req,res)=>{
    return res.end("<h1>Page not found</h1>")
})
const server=http.createServer(app)
server.listen(8000,()=>{
    console.log("Server Start")
})
