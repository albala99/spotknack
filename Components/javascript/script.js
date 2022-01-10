function fun2(){
    var x=document.getElementsByClassName("input-field");
    for(var i=0;i<x.length;i++){
        x[i].style.backgroundColor="#FA8072";
    }
}
function validate(){
    var umail=document.getElementById("uname").value;
    var upass=document.getElementById("pass").value;
    var mailcheck=/^([a-z A-Z 0-9 \.]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/;
    console.log(umail);
    console.log(upass);
    if(umail.trim()=="" || upass.trim()=="" ){
        alert("Please enter Email & Password");
        fun2();
        console.log("NO username or password");
        return false; 
    }
    // else if(umail=="Bala" && upass=="12345")
    // {
    //     alert("Login Successful");
    //     return true;
    // }
    else if((mailcheck.test(umail))&& upass=="12345")
    {
        alert("Login Successful");
        console.log(umail +"Logedin Successfully");
        return true;
    }
    else{
        alert("Invalid Username Or Password");
        fun2();
        console.log("Invalid Username Or Password");
        return false;
    }
}