const fs=require('fs')
console.log("Login module")
console.log("Signup module")
// const file=fs.readFileSync('./sample.txt','utf-8')
fs.readFile('./sample.txt','utf-8',(err,file)=>{
if(err){
    console.log(err)
    return
}
console.log(file)
})
// console.log(file)
console.log('Forgot password module')
console.log('Reset password module')