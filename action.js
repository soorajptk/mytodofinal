function shw() {
  let body = document.getElementById("login-body");
  body.style.display="flex";

}

let btn=document.getElementById("bttn");
btn.addEventListener("click",check);

function act(lab,spa){

  let label=document.getElementById(lab)
  label.style.cssText="top: -5px;color: rgb(68, 238, 68)"
  let span=document.getElementById(spa)
  span.style.cssText="background-color:rgb(58,245,58)"

}


function check(e){
  e.preventDefault();

let username=document.getElementById("username").value;
let userpassword=document.getElementById("password").value;
if(username=="" && userpassword==""){
  let label=document.getElementById("user")
label.style.cssText="top:50%;color: red"
let span=document.getElementById("userspan")
span.style.cssText="background-color:red"

let passwrdlabel=document.getElementById("passwrd")
passwrdlabel.style.cssText="top:50%;color: red"
let passwordspan=document.getElementById("passwrdspan")
passwordspan.style.cssText="background-color:red"
}else if(userpassword==""){
  
let passwrdlabel=document.getElementById("passwrd")
passwrdlabel.style.cssText="top:50%;color: red"
let passwordspan=document.getElementById("passwrdspan")
passwordspan.style.cssText="background-color:red"
}else  if(username==""){
  let label=document.getElementById("user")
label.style.cssText="top:50%;color: red"
let span=document.getElementById("userspan")
span.style.cssText="background-color:red"
} else if(username!="Admin"&&userpassword!="12345")
{
  let label=document.getElementById("user")
  label.style.cssText="top:-5px;color: red"
  let span=document.getElementById("userspan")
  span.style.cssText="background-color:red"

  let passwrdlabel=document.getElementById("passwrd")
  passwrdlabel.style.cssText="top:-5px;color: red"
  let passwordspan=document.getElementById("passwrdspan")
  passwordspan.style.cssText="background-color:red"
} else if(username!="Admin"){
  let label=document.getElementById("user")
  label.style.cssText="top:-5px;color: red"
  let span=document.getElementById("userspan")
  span.style.cssText="background-color:red"
}else if(userpassword!="12345"){
  let passwrdlabel=document.getElementById("passwrd")
  passwrdlabel.style.cssText="top:-5px;color: red"
  let passwordspan=document.getElementById("passwrdspan")
  passwordspan.style.cssText="background-color:red"
}else if(username==="Admin"&&userpassword==="12345"){
  
  dis("successfully logged &#128549;");
  var modal = document.getElementById("myModal");
  modal.addEventListener("click",()=>{
  location.replace("./home/home.html")

  })

    }
    }









function dis(msg) {
  var modal = document.getElementById("myModal");
     let para=document.getElementById("para");  
     para.innerHTML=msg
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
  
 