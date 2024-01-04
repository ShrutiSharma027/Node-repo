// Install express first npm i express

const fs=require('fs')                 //require fs file to use fs 


const users=require('./MOCK_DATA.json')
const http=require ('http')
const express=require ('express')
const app=express();
//app.use(express.urlencoded())            
app.use(express.json())

// ***********************************************
// GET Method  (new method (02/01/2024))
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
})       // ************** END


// ***********************************************
// POST Method  (new method (04/01/2024))
app.post("/api/users", (req, res) => {
    const body = req.body
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success" })
    });
});      // ********** END

// ********************************************
//PATCH Method   (new method (04/01/24024))
app.patch("/api/users/:id",(req,res)=>{
    //const id=req.params.id;
    const id=parseInt(req.params.id)
    const user=users.find(u=>u.id===id)
    if(!user){
        return res.status(404).json({
            status:"Fail",
            message:"User not found"
        });
    }
    const i=users.indexOf(user)
    Object.assign(user,req.body)
    users[i]=user
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "User updated successfully" })
    });
})    // ************* END


// ********************************************
//DELETE Method   (new method (04/01/24024))
app.delete("/api/users/:id",(req,res)=>{
    //const id=req.params.id;
    const id=parseInt(req.params.id)
    const user=users.find(u=>u.id===id)
    if(!user){
        return res.status(404).json({
            status:"Fail",
            message:"User not found"
        });
    }
    const i=users.indexOf(user)
    users.splice(i,1)   //1 is used to delete one data (If we have to delete more data inc. value)
   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "Success", message: "User deleted successfully" })
    });
})    // ********** END


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
