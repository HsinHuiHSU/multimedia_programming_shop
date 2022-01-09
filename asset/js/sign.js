function show() {
    var login = document.getElementById("cont1");
    var signup = document.getElementById("cont2");
  
    if (login.style.display === "none") {
        login.style.display = "block"; 
        document.getElementById("uname").value="";
        document.getElementById("pass").value="";
        signup.style.display = "none"; 
    } else {
        login.style.display = "none"; 
        signup.style.display = "block";
        signup.style.visibility="visible";
     
        document.getElementById("name").value="";
        document.getElementById("uname2").value="";
        document.getElementById("pass2").value="";
        document.getElementById("cpass").value="";
    }
}