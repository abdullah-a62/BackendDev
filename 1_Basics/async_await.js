async function cal(num1,num2){
    try {
        console.log('result : ',num1**num2); 
    }catch(err){
        console.error(err)
    }
}
async function main(){
    console.info('Wellcome to calculate.com');
    await cal(12,3);
    console.log('done');

}
main();