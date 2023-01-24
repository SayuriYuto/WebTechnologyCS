function emailvalidation(){
  let form = document.getElementById("form");
  let email = document.getElementById("emaillabel").value;
  let emailerror = document.getElementById("emailerror");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email.match(pattern)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    emailerror.innerHTML = "Your Email address is Valid."
    emailerror.style.color = "#00ff00"
  }
  else{
    form.classList.add("invalid");
    form.classList.remove("valid");
    emailerror.innerHTML = "Please enter valid email address."
    emailerror.style.color = "#ff0000"
  }
  if(email == ""){
    form.classList.add("invalid");
    form.classList.remove("valid");
    emailerror.innerHTML = "Please enter an email id."
    emailerror.style.color = "#ff0000"
  }
}
function numbervalidation(){
  let number = document.getElementById("phonelabel").value;
  let numbererror = document.getElementById("numbererror");
  let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

  if(number.match(pattern)){
    numbererror.innerHTML = "Phone number is valid";
    numbererror.style.color = "#00ff00"
  }
  else{
    numbererror.innerHTML = "Phone number is invalid";
    numbererror.style.color = "#ff0000"
  }
}
