

function Check() { 

validateUserName();
Email()
Password() 
}
function validateUserName(){
  
  var username=document.querySelector("#usrname").value;
  if ((username[0] === username[0].toUpperCase())  && username.length>6) {
    return true;
    }
  else{
   document.querySelector(".useralert").innerHTML="Username min 6 elementden ibaret olmali ve ilk herfi boyuk olmalidi!"
  }
}

function Email()
  {
     var mail=document.querySelector("#mail").value
  var mailre = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (mail.match(mailre))
    {
      return (true)
    }
    else
   {console.log("HI")
    document.querySelector(".mailalert").innerHTML="Email sehvdir!"
  // alert("ghfrh");
    return (false);
    
  }
  }
  
function Password() {
  var psswrd = document.querySelector("#pswrd");
  var pswrdre=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (psswrd.match(pswrdre) ) {
   console.log("xxxx")

   return true;
  }
  else{
    document.querySelector(".pswrdalert").innerHTML="Password sehvdir!"
 
  }
}


  
