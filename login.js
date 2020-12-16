var page=1;
let tasks=[];
let token = sessionStorage.getItem('token');


 function register(login_,password_,email_){
	const res= fetch('http://localhost:8080/register',{
		method:"POST",
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({password:password_,login:login_,email:email_})
	}).then((res)=>{
alert("ОК");
	})
}
var obj;
async function getToken(login_,password_){
const res=await fetch('http://localhost:8080/auth',{
		method:"POST",
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({password:password_,login:login_})
	})
	return res.json();	
}

 function authorization(login_,password_){ 	
  getToken(login_,password_).then((ress)=>{
	//tokens=ress.token;
	 
	sessionStorage.setItem('token',ress.obj[0])
	  console.log(ress.obj[1]);
	 if(ress.obj[1]=="admin"){
		window.location='admin.html';
	 }
	 else{
		window.location='menu.html';
	 }
	 

}) 	
}

async function loadAllTask(page,limit){
	console.log(token);
    const res =  await fetch(`http://localhost:8080/api/getAllTask`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify({page:page,counter:limit})
    })
    return await res.json();
}
 function loadTask() {
        loadAllTask( page, 10)
            .then((res) => {   
            res.obj.forEach(task => {
				document.getElementById("result").innerHTML+=`<div>${task.name_task}</div>`;
               //document.write(task.name_task);
            });
                        
            });
    } 

	function loadTask_next() {
		page++;
			loadAllTask( page, 10)
				.then((res) => { 
					document.getElementById("result").innerHTML=' ';
				res.obj.forEach(task => {
					document.getElementById("result").innerHTML+=`<div>${task.name_task}</div>`;
				   //document.write(task.name_task);
				});
							
				});
		} 
		function loadTask_before() {
			page--;
				loadAllTask( page, 10)
					.then((res) => { 
						document.getElementById("result").innerHTML=' ';
					res.obj.forEach(task => {
						document.getElementById("result").innerHTML+=`<div>${task.name_task}</div>`;
					   //document.write(task.name_task);
					});
								
					});
			} 

			////////////////////////////////////////
			/////ПОИСК///////
async function searchAllTask(inform,page,limit){
	console.log(token);
    const res =  await fetch(`http://localhost:8080/api/searchTask`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify({inform:inform,page:page,limit:limit})
    })
    return await res.json();
}
 function search(search_) {
	 	document.getElementById("result").innerHTML=' '; 
		searchAllTask(search_, page, 10)	
            .then((res) => {  				
            res.obj.forEach(task => {
				document.getElementById("result").innerHTML+=`<div>${task.name_task}</div>`;
               //document.write(task.name_task);
            });
                        
            });
    } 

	function add_me(search_) {
		document.getElementById("result1").innerHTML=' '; 
	  
			   document.getElementById("result1").innerHTML+=`<div>${search_}</div>`;
			  //document.write(task.name_task);
	
					   
	
   } 
	//////Удаление
	async function deleteAllTask(inform){
		console.log(token);
		const res =  await fetch(`http://localhost:8080/apiAdmin/deleteTask`,{
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body:JSON.stringify({name:inform})
		})
		return await res.json();
	}
	 function delete_(search_) {
			 document.getElementById("result").innerHTML=' '; 
			deleteAllTask(search_)	
				.then((res) => {  
					if(res.message="User is deleted")	{
						loadTask()	;	
					};
							
				});
		} 	
		////ДОБАВЛЕНИЕ
		async function addAllTask(name_task,comp){
			console.log(token);
			const res =  await fetch(`http://localhost:8080/apiAdmin/addContact`,{
				method:'POST',
				headers:{
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body:JSON.stringify({name_task:name_task,completed:comp})
			})
			return await res.json();
		}
		 function addtask(name_task,comp) {	
			document.getElementById("result").innerHTML=' '; 	 
			addAllTask(name_task,comp)	
					.then((res) => {  
						if(res.message="Successful")	{
							loadTask();	
						};
								
					});
			} 	