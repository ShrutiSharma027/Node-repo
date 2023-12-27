const fs = require('fs')

// ************************  create, write and append a file *****************
// fs.writeFileSync('./test.txt',"Welcome ")
// fs.appendFileSync('./test.txt',`How are you \n`)
// fs.stat('./test.txt', (err, stats) => {
//     if (err) {
//         console.error(err)
//         return;
//     }
//     if (stats.isFile()) {
//         console.log('File size is',stats)
//     }
//     else {
//         console.log('No file available')
//     }
// });

// ******************* Read a directory **************************
fs.readdir('./',(err,Files)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('FIles in directory',Files)
});

// *************************** Copy a file ********************
fs.copyFile('./test.txt','./copy.txt',(err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("File copies")
});
// ******************** Reading a file **************************
// fs.copyFile('./test.txt','./copy.txt',(err)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log("File copies")
//     const f = fs.readFileSync('./copy.txt','utf-8')
//     console.log(f)
// });

// ************************ Unlink/Delete a file *****************************
fs.unlink('./copy.txt',(err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("File deleted")
});