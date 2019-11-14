
//Validación para los niveles de usuario en el login
function Login(){ 
    var username = document.getElementById('correo').value;
    var password = document.getElementById('pass').value;
    if (username=="admin@cryptolab.net" && password=="123") { 
        window.location="admin.html"; 
    } 
    if (usuario=="william@gmail.com" && password=="1") { 
        window.location="cliente.html"; 
    } 
} 