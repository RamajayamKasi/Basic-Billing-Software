
var a=0;
function Submit(){
    var Username=document.getElementById("Username");
    var Password=document.getElementById("Password");
    var error=document.querySelector("p");
    var text1=document.getElementById("text1");
    var text2=document.getElementById("text2");
    if(Username.value=="" && Password.value==""){
        text1.innerHTML="UserName Is Empty";
        text2.innerHTML="Password Is Empty";
    }else if(Username.value=="jagan" && Password.value=="1"){
        localStorage.setItem('Login','Yes');
       window.location.assign("index.html");
    }else if(Username.value!="jagan" && Password.value!="1"){
       error.innerHTML="username and password is not Matched";
        text1.innerHTML="";
        text2.innerHTML="";
        a++;
}
if(a>2){
    location.replace("AccountBlock.html");
}
}

