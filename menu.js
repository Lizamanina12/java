var page=1;
let tasks=[];
let token;

    
async function loadAllTask(token,page,limit){
    const res =  await fetch(`http://localhost:8080/api/getAllTask`,{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify({page:page,limit:limit})
    })
    return await res.json();
}
 function loadTask() {
   
        loadAllTask( this.page, 10)
            .then((res) => {   
            res.obj.forEach(task => {
                document.write(task.name_task);
            });;
                        
            });
    } 
