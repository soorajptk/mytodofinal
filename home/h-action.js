let t=document.getElementById("todo");
t.addEventListener("click",loads)
  

function loads(){
      
    
    const xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            let data=JSON.parse(this.responseText);
            content(data);
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();

}

function content(data){

    for(let x in data){
    
    let Todiv=document.createElement("div");
    if(data[x].completed===true){
        Todiv.classList.add("todiv","completd");
    }else{
    Todiv.classList.add("todiv");

    }
    let newtodo=document.createElement("li");
    newtodo.classList.add("newli");
    
    newtodo.innerText= data[x].title;
    Todiv.appendChild(newtodo);


    const complete_btn=document.createElement("button");
    complete_btn.innerHTML='<i class="fas fa-check"></i>'
    complete_btn.classList.add("complete-btn");
    Todiv.appendChild(complete_btn)

    const delete_btn=document.createElement("button");
    delete_btn.innerHTML='<i class="fas fa-trash"></i>'
    delete_btn.classList.add("delete-btn");
    Todiv.appendChild(delete_btn)

    let list=document.querySelector(".list-items");
    list.appendChild(Todiv)
    }   
}



let list=document.querySelector(".list-items");
list.addEventListener("click",deletecheck);

function deletecheck(e){    
    
    const item=e.target;
    
    if(item.classList[0]==="delete-btn"){
        const todo=item.parentElement;
        todo.classList.add("anim");
        storagedel(todo);
        todo.addEventListener("transitionend",function(){
            todo.remove();

        })
    }

}



 

list.addEventListener("click",completecheck);

function completecheck(e){    
    
    const item=e.target;
    if(item.classList[0]==="complete-btn"){       
        const todo=item.parentElement;     
        todo.classList.toggle("completd");
        count(todo);    
   }
}

// list.addEventListener("click",count);
 let inc=0;

 function count(todo){
    let c=todo.classList[1];
    if(c){
         inc++; 
     } else{
         inc--;
     }
    //  console.log(inc)

     if(inc==5){
        //  alert("you complted 5 task")


        dis();


          function dis() {
         var modal = document.getElementById("myModal");
            let para=document.getElementById("para");  
            para.innerHTML=" Congrats. 5 Tasks have been Successfully Completed &#128077"
           modal.style.display = "block";
         }
         
         var span = document.getElementById("span1");
         
         span.onclick = function() {
         var modal = document.getElementById("myModal");

           modal.style.display = "none";
         }
         
         window.onclick = function(event) {
         var modal = document.getElementById("myModal");
           
            if (event.target == modal) {
             modal.style.display = "none";
           }
         }
         

     }

}





let input_btn=document.querySelector(".input-btn");
input_btn.addEventListener("click",add);


function add(event){
   
   
    event.preventDefault();

    let input=document.querySelector(".input-txt");
    if(input.value){
    let Todiv=document.createElement("div");
    Todiv.classList.add("todiv");
    let newtodo=document.createElement("li");
    newtodo.classList.add("newli");
    
    newtodo.innerText= input.value;
    Todiv.appendChild(newtodo);

    storage(input.value);
    const complete_btn=document.createElement("button");
    // complete_btn.value=data[x].completed;
    // console.log(complete_btn.value)
    complete_btn.innerHTML='<i class="fas fa-check"></i>'
    complete_btn.classList.add("complete-btn");
    Todiv.appendChild(complete_btn)

    const delete_btn=document.createElement("button");
    delete_btn.innerHTML='<i class="fas fa-trash"></i>'
    delete_btn.classList.add("delete-btn");
    Todiv.appendChild(delete_btn)

    let list=document.querySelector(".list-items");
    list.appendChild(Todiv)
        input.value="";
    }

}





let search=document.querySelector(".input-search");
search.addEventListener("click",myFunction);



function myFunction(event) {
    event.preventDefault();
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelector(".input-txt");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".list-items");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display ="";
        } else {
            li[i].parentElement.style.display="none";
        }
    }
}


let logout=document.getElementById("header-btn");
logout.addEventListener("click",out);


function out(){
    location.replace("../index.html")
}





function storage(todo){

    let todos;
    if(localStorage.getItem("todos")==null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}




t.onclick=function(){

let todos=JSON.parse(localStorage.getItem("todos"));
for(let x of todos){

let Todiv=document.createElement("div");
Todiv.classList.add("todiv");
let newtodo=document.createElement("li");
newtodo.classList.add("newli");

newtodo.innerText= x;
Todiv.appendChild(newtodo);

const complete_btn=document.createElement("button");
complete_btn.innerHTML='<i class="fas fa-check"></i>'
complete_btn.classList.add("complete-btn");
Todiv.appendChild(complete_btn)

const delete_btn=document.createElement("button");
delete_btn.innerHTML='<i class="fas fa-trash"></i>'
delete_btn.classList.add("delete-btn");
Todiv.appendChild(delete_btn)

let list=document.querySelector(".list-items");
list.appendChild(Todiv)


}}



function storagedel(todo){
let store=JSON.parse(localStorage.getItem("todos"))
let item=todo.childNodes[0].textContent;
store.splice(store.indexOf(item),1)
localStorage.setItem("todos",JSON.stringify(store))
    
    }
  

