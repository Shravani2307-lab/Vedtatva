function done(){
    var name= document.getElementById("username").value;
    var email= document.getElementById("password").value;
    var phno= document.getElementById("password").value;
    var pw1= document.getElementById("password").value;
    var pw2= document.getElementById("password").value;
    alert(uid + password);

    //storage
    var name= localStorage.setItem("name",name);
    var email= localStorage.setItem("email",email);
    var phno= localStorage.setItem("phno",phno);
    var pw1= localStorage.setItem("pw1",pw1);
    var pw2= localStorage.setItem("pw2",pw2);


}