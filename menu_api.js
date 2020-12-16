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
