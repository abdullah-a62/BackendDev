$(document).ready(function(){
    $('#myTable').DataTable({
        ajax:{
            url:'http://localhost:3000/api/allUsers',
            dataSrc:'data'
        },
        columns:[
            {data:'username'},
            {data:'email'},
            {data:'age'}
        ],
        // layout:{
        //     topStart:{
        //         buttons:['excelHtml5','copyHtml5','psfHtml5']
        //     }
        // }
    })
})