function Submit(){
    var Username=document.getElementById("Username");
    var Password=document.getElementById("Password");
    var error=document.querySelector("p");
    var c=0;
    if(Username.value=="" && Password==""){
        alert("fhj");
        c++;
        console.log(c);
        }else if(c>2){
            alert("incorrect")
        }
    if(Username.value=="jagan" && Password.value=="1"){
       window.location.assign("home.html");
    }
}