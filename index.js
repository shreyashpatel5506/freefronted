function submit(){
    var email=document.getElementById("emailv").value
    if(document.getElementById("emailv").value==""){
        document.getElementById("sub").disabled;
        document.getElementById("errorm").classList.add("error1");
        document.getElementById("errorm").classList.remove("error");
    }
   
   else if(email.indexOf('@')===-1 || email.indexOf('.')===-1){
    document.getElementById("sub").disabled;
    document.getElementById("errorm").innerHTML="please include @ and . in email"
    document.getElementById("errorm").classList.add("error1");
    document.getElementById("errorm").classList.remove("error");
    return false;
   }
    else{
    let email=document.getElementById("emailv").value;
    document.getElementById("emailu").innerHTML = email;
    document.getElementById("signup").classList.add("remove");
    document.getElementById("sucess").classList.add("cardsucess1");
    document.getElementById("sucess").classList.remove("cardsucess");
    }
}
function dismiss(){
    document.getElementById("signup").classList.remove("remove");
    document.getElementById("sucess").classList.remove("cardsucess1");
    document.getElementById("sucess").classList.add("cardsucess");
}