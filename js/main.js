
//Validación para los niveles de usuario en el login
function Login(){ 
    var username = document.getElementById('correo').value;
    var password = document.getElementById('pass').value;
    //Expresion regular para validar el email 
    validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (username=="admin@cryptolab.net" && password=="123") { 
        window.location="template/admin.html"; 
    } 
    if (username=="william@gmail.com" && password=="1") { 
        window.location="template/cliente.html"; 
    }
    if(username === "" || username === "null" || password === "" || password === "null"){
        alertify.error("Error, los campos se encuentran vacios");
    }
    if(!validarEmail.test(username)){
        alertify.error("Error, correo elèctronico no valido");
        document.getElementById('correo').value = "";
    }

    if(username != "admin@cryptolab.net" && username != "william@gmail.com" && validarEmail.test(username)){
        alertify.error("Usuario no registrado");
        document.getElementById('correo').value = "";
        document.getElementById('pass').value = "";
    }
}

function Registro(){
    var nombre = document.getElementById('nombre').value;
    var cedula = document.getElementById('cedula').value;
    var tlf = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;
    var fecha = document.getElementById('fecha').value;
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('pass').value;
    flag = true;
    validarNombre = /[0-9]/;
    validarCedula = /[A-Z]|\s|[a-z]/;
    validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(validarNombre.test(nombre)){
        alertify.error('El nombre no puede contener numeros');
        document.getElementById('nombre').value = "";
        flag = false;
    }
    if(validarCedula.test(cedula)){
        alertify.error('La cedula no puede contener letras');
        document.getElementById('cedula').value = "";
        flag = false;
    }
    if(validarCedula.test(tlf)){
        alertify.error('El telefono no puede contener letras');
        document.getElementById('tlf').value = "";
        flag = false;
    }
    if(!validarEmail.test(correo)){
        alertify.error("Error, correo elèctronico no valido");
        document.getElementById('correo').value = "";
        flag = false;
    }
    if(nombre === "" || nombre === "null" || cedula === "" || cedula === "null" 
        || tlf === "null" || tlf === "" || direccion ==="" || direccion ==="null" ||
         correo === "null" || correo ===""|| pass === "null" || pass === ""){
            // Muestro el error
        alertify.error("Error, algunos campos se encuentran vacio");
        flag = false;
    }

    if(flag){
        alertify.alert('Gestión Inmobiliaria', 'Registro Exitoso!', function(){ 
            alertify.success('Ok'); window.location="../index.html";})
    }

}