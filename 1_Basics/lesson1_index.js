console.log("Hello world");
const funcs=require('./import_export')
console.log(`result${funcs.add(2,4)}`);
console.log(`result${funcs.sub(2,4)}`);
console.log(`result${funcs.multiply(2,4)}`);
try{
    console.log(`result${funcs.divide(2,0)}`);
}catch(error){
    console.log(error.message);
}
console.log(`dirname : ${__dirname}`);
console.log(`filename : ${__filename}`);