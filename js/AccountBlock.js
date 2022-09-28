
var h1=0,m1=0,run=null,s1=0,s=60,m=59,h=1;
function times(){
    if(s<=60){
        s--
    }
    if(s==0){
        s=60
        m--
    }
    if(m==0){
        s=0;
    }
            m1=(m<10)?"0"+m:m;
            s1=(s<10)?"0"+s:s;
            if(h==0){
                document.getElementById("time").innerHTML=m1+":"+s1;
    }else{
    document.getElementById("time").innerHTML=m1+":"+s1;
    }
    run=setTimeout("times()",1000);
    if(m==00 && s==00){
        location.replace("index.html");
    }    
}
times();

/********************************************************verify code ****************************/
function verify(){
    var code=document.getElementById("code").value;
    if(code.toLowerCase()=="pwtey"){
        location.replace("index.html")
    }
}