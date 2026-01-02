const fs=require('fs')

function person(name,callbackFn){
    console.log(`wellcome ${name}`);
    callbackFn();
  
}
function country(){
    console.info(` from Pakistan`)
}
person("Qaisir Naseer",country)

/*
fs.readFile('callback.txt','utf8',(err,data)=>{
    if (err){
        console.error('Error 1 :  reading file',err)
        return ;
    }
    const modifyData=data.toUpperCase();
    fs.writeFile('callback.txt',modifyData,(err,res)=>{
        if(err){
            console.error('error 2:  writing data in file ', err)
            return ;
        }
        fs.readFile('callback.txt','utf8',(err,data)=>{
            if(err){
                console.error('error 3 : reading file ',err)
                return ;
            }
            console.log(data);
        })
    })
})
    */