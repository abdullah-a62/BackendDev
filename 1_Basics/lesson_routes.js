const http=require('http')
const server=http.createServer((req,res)=>{
    const url=req.url;
    console.log(url);
    if(url==="/"){
        res.writeHead(200,{"Content-Type": "text/plain"})
        res.end("Hello !!!! wellcome to home Page")
    }else if(url==="/about"){
        res.writeHead(200,{"Content-Type": "text/plain"})
        res.end("Hey! I am Qaisir Naseer \n Learning Full Stack Development")
    }else{
        res.writeHead(400,{"Content-Type": "text/plain"});
        res.end("404 error! page not found");
    }
});
const port=3000;
server.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
})