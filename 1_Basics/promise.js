function intro(name){
    return new Promise((resolve,reject)=>{
        if (name == "Qaisir"){
            resolve('Wellcome to our portal')
        }
        else{
            reject('not authorized user')
        }
    });
}
intro("Qaisir").then((res)=>{
    console.info('response : ',res)
}).catch((err)=>{
    console.error('rejection : ',err)
})