if(localStorage.getItem('Login')==null){
    window.location.assign("Login.html");
}

/************************************************** globle variable *************************************/
var n=0,c=0,text1="",text2="",text3="",text4="",text5="",text6=0,item=[];;
//var round=Random(0,9999999999)
$("#BillNo").text("Bill No : "+12356);
console.log(localStorage.getItem(item));
/*************************************************** product details ***********************************8*/
function servie(){
    var servies= $("#servies").val();
    var qty= $("#qty");
    var price= $("#price");
    var amount= $("#amount");
if(servies.toLowerCase()=="bike"){
   qty.val("1");
   price.val("150");
   amount.val("150");
    }
    if(servies.toLowerCase()=="car"){
   qty.val("1");
   price.val("600");
   amount.val("600");
    }
    if(servies.toLowerCase()=="auto"){
   qty.val("1");
   price.val("350");
   amount.val("350");
    }
    if(servies.toLowerCase()=="tempo"){
   qty.val("1");
   price.val("500");
   amount.val("500");
    }
    if(servies.toLowerCase()=="small battery"){
   qty.val("1");
   price.val("100");
   amount.val("100");
    }
    if(servies.toLowerCase()=="big battery"){
   qty.val("1");
   price.val("160");
   amount.val("160");
    }
    if(servies.toLowerCase()=="small engine"){
   qty.val("1");
   price.val("140");
   amount.val("140");
    }
    if(servies.toLowerCase()=="big engine"){
   qty.val("1");
   price.val("250");
   amount.val("250");
    }
}
/*********************************************************  increase the product  *****************************/
function Qty(){
        var qty= $("#qty").val();
        var price= $("#price").val();
        $("#amount").val(qty*price);
}
/********************************************** display the output *************************** */
function submit(){
    var servies= $("#servies").val();
    var qty= $("#qty").val();
    var price= $("#price").val();
    var amount= $("#amount").val();
    var totalNumber=$(".totalNumber").val();
    var s=document.getElementById("servies");
    var q=document.getElementById("qty");
    if(s.value=="" || q.value==""){
        alert("The Field Is Empty")

    }else{
       n++;
       for(i=1;i<=n;i++){
           c++
           text1+=c+"<br><br>";
           text2+=servies+"<br><br>";
           text3+=qty+"<br><br>";
           text4+=price+"<br><br>";
           text5+=amount+"<br><br>";
          
           document.querySelector(".Sno").innerHTML=text1;
           document.querySelector(".servies").innerHTML=text2;
           document.querySelector(".qty").innerHTML=text3;
           document.querySelector(".price").innerHTML=text4;
           document.querySelector(".amount").innerHTML=text5;
           n--;
           item.push(servies,qty,price,amount);
           localStorage.item+=JSON.stringify({"Description":servies,"Qty":qty,"Price":price,"Amount":amount});
           $("#servies").val(" ");$("#qty").val(" ");$("#price").val(" ");$("#amount").val(" ");
       }
       var b=parseInt(amount);
       text6+=b;
       document.querySelector(".totalNumber").innerHTML=text6;
    }
}

/******************************************* automatic data and time ************************************/
function dt(){
        var d =new Date();
        h=d.getHours();
        m=d.getMinutes();
        s=d.getSeconds();
        var day=d.getDate();
        day=(day<10)?"0"+day:day;
        h=(h>12)? h=h-12 :h;
        h=(h<10)?"0"+h:h;
        m=(m<10)?"0"+m:m;
        s=(s<10)?"0"+s:s;
        if(h<12){
            session="PM";
        }
        else{
            session="AM";
        }
        document.getElementById("date").innerHTML="Date : "+day+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
        document.getElementById("time").innerHTML="Time : "+h+":"+m+":"+s+" "+session;
        running=setTimeout("dt();",1000);
    }
dt();

/************************************************** calculate the balance amount **************************/
function tender(){
    var totalNumber =$(".totalNumber").text();
    var b=parseInt(totalNumber);
       var tenderValue=document.getElementById("tenderValue").value;
       document.querySelector(".balanceNumber").innerHTML=tenderValue-b;

}

/****************************************************** print the page *****************************/
function pdf(){
    window.print();
}
