function test(){
    // retriveing the data
    var uid= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    alert(uid + password);

    //storage
    var uid= localStorage.setItem("username",uid);
    var password= localStorage.setItem("password",password);
}