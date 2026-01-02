const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req);
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("This is plain text");
});
const port=3000;
server.listen(port,()=>{
    console.log(`server is listening  at http://localhost:${port}`);
})