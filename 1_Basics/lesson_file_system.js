const { error } = require('console');
const fs=require('fs')
const path=require('path')

const dataFolder=path.join(__dirname,'data')

//check deos folder exists ?? 
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log(`folder created named : ${dataFolder}`);
}
const filePath=path.join(dataFolder,'syncFile.txt')

//synchronous file handling

fs.writeFileSync(filePath,'Hello from Node.js')  
console.log(`file created named  : ${path.normalize(filePath)}`);

const data=fs.readFileSync(filePath,'utf8')
console.log(`data from file : ${data}`);

fs.appendFileSync(filePath,'\nThis is new line data')
console.log(`data appended in file `);

//Asynchronous file handling
const asyncFilePath=path.join(dataFolder,'async.txt')
fs.writeFile(asyncFilePath,"Hello from async node.js",(error)=>{
    if(error) throw error;
    console.log(`async file created : ${asyncFilePath}`);
})
fs.readFile(asyncFilePath,'utf8',(err,data)=>{
    if(err) throw err;
    console.log(`data from file : ${data}`);
})
fs.appendFile(asyncFilePath,'\nThis data is for new line',(err)=>{
    if(err) throw err;
    console.log(`data appended in file`);
})