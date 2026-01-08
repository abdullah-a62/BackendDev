var table = new Tabulator("#userTable", {
    ajaxURL:"http://localhost:3000/api/allUsers",
    ajaxResponse:function(url, data, response){
    return response.data;},
    layout:'fitColumns',
    printAsHtml:true,
    printHeader:'<h1>users Data</h1>',
    printFooter:'',
    pagination:true,
    paginationSize:4,
    pasginationSizeSelector:[3,4,5],
    placeholder:"no data found",
    columns:[
        {title:'Name', field:'username', headerFilter:'input'},
        {title:'Email', field:'email'  ,headerFilter:'input'},
        {title :"Age" , field:'age'}
    ]
});
document.querySelector('#print').addEventListener('click',()=>{
    table.print(false,true)
});
document.querySelector('#download-csv').addEventListener('click',()=>{
    table.download('csv','users.csv')
});
document.querySelector('#download-json').addEventListener('click',()=>{
    table.download('json','users.json')
});
document.querySelector('#download-pdf').addEventListener('click',()=>{
    table.download('pdf','users.pdf',{
        orientation:'portrait',
        title:'Users Data'
    })
});
document.querySelector('#download-html').addEventListener('click',()=>{
    table.download('html','users.html',{style:true})
});
document.querySelector('#download-xlsx').addEventListener('click',()=>{
    table.download('xlsx','users.xlsx',{sheetName:'Users'})
});
