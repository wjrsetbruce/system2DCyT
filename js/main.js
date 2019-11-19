
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
        alertify.error("Error, los campos se encuentran vacíos");
    }
    if(!validarEmail.test(username)){
        alertify.error("Error, correo eléctronico no válido");
        document.getElementById('correo').value = "";
    }

    if(username != "admin@cryptolab.net" && username != "william@gmail.com" && validarEmail.test(username)){
        alertify.error("Usuario no registrado");
        document.getElementById('correo').value = "";
        document.getElementById('pass').value = "";
    }

    if(username === 'william@gmail.com' && password != "1"){
        alertify.error("Contraseña Incorrecta");
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
    validarCaracteres = /[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
    if(validarNombre.test(nombre)){
        alertify.error('El nombre no puede contener números');
        document.getElementById('nombre').value = "";
        flag = false;
    }
    if(validarCaracteres.test(nombre)){
        alertify.error('El nombre no puede contener caracteres especiales');
        document.getElementById('nombre').value = "";
        flag = false;
    }
    if(validarCedula.test(cedula)){
        alertify.error('La cédula no puede contener letras');
        document.getElementById('cedula').value = "";
        flag = false;
    }
    if(validarCaracteres.test(direccion)){
        alertify.error('Dirección no puede contener caracteres especiales');
        document.getElementById('direccion').value = "";
        flag = false;
    }
    if(cedula === '18736475'){
        alertify.error('Error, Cliente ya registrado');
        document.getElementById('cedula').value = "";
        flag = false;
    }
    if(validarCedula.test(tlf) || validarCaracteres.test(tlf)){
        alertify.error('El teléfono no puede contener letras, ni caracteres especiales');
        document.getElementById('telefono').value = "";
        flag = false;
    }
    if(!validarEmail.test(correo)){
        alertify.error("Error, correo eléctronico no válido");
        document.getElementById('correo').value = "";
        flag = false;
    }
    if(nombre === "" || nombre === "null" || cedula === "" || cedula === "null" 
        || tlf === "null" || tlf === "" || direccion ==="" || direccion ==="null" ||
         correo === "null" || correo ===""|| pass === "null" || pass === ""){
            // Muestro el error
        alertify.error("Error, algunos campos se encuentran vacíos");
        flag = false;
    }

    if(flag){
        alertify.alert('Grupo Gestión Inmobiliaria', 'Registro Finalizado!', function(){ 
            alertify.success('Ok'); window.location="../index.html";})
    }

}

function modificarDatos(){
    var tlf = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;
    var correo = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    flag = true;
    validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    validarTlf = /[A-Z]|\s|[a-z]/;
    validarCaracteres = /[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
    if(!validarEmail.test(correo)){
        alertify.error("Error, correo eléctronico no válido");
        document.getElementById('email').value = "";
        flag = false;
    }

    if(validarCaracteres.test(direccion)){
        alertify.error('La Dirección no puede contener caracteres especiales');
        document.getElementById('direccion').value = "";
        flag = false;
    }

    if(validarTlf.test(tlf) || validarCaracteres.test(tlf)){
        alertify.error('El teléfono no puede contener letras, ni caracteres especiales');
        document.getElementById('telefono').value = "";
        flag = false;
    }

    if(tlf === "" || tlf === "null" || direccion === "" || direccion === "null" ||
         correo === "null" || correo ===""|| password === "null" || password === ""){
            // Muestro el error
         alertify.error("Error, algunos campos se encuentran vacíos");
         flag = false;
    }

    if(flag){
        alertify.alert('Grupo Gestión Inmobiliaria', 'Modificación Exitosa!', function(){
            alertify.success('Ok'); window.location="cliente.html";})

    }
}

function Locales(){
    alertify.alert('Grupo Gestión Inmobiliaria', 'Información del Local y la Oficina', function(){
        alertify.success('Ok'); window.location="consultar_servicio.html";})

}

function RegistroCita(){
    alertify.alert('Grupo Gestión Inmobiliaria', 'Registro de Solicitud Finalizada, tiene su cita a las 3PM', function(){
        alertify.success('Ok'); window.location="registrar_cita.html";})
}

function ConsultarCita(){
    alertify.alert('Grupo Gestión Inmobiliaria', 'La hora de su cita es a las 3pm', function(){
        alertify.success('Ok'); window.location="consultar_cita.html";})
}

function RegistrarOpinion(){
    validarCaracteres = /[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
    var opinion = document.getElementById("opinion").value;
    var flag = true;
    if(validarCaracteres.test(opinion) || opinion === "null" || opinion ===""){
        alertify.error('No puede dejar vacío el campo de opinión, ni colocar caracteres especiales');
        document.getElementById('opinion').value = "";
        flag = false;
    }
    if(flag){
        alertify.alert('Grupo Gestión Inmobiliaria', '¡ Gracias por su opinión !', function(){
            alertify.success('Opinion guardada con exito'); document.getElementById('opinion').value = "";})
    }

}

function Borrar(){
    alertify.confirm("¿Esta seguro que desea Borrar al inquilino.?",function(){
        alertify.success('Inquilino eliminado exitosamente');},function(){
            alertify.error('El inquilino no se ha eliminado');
  });
}

function Editar(){
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    validarCaracteres = /[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
    validarNumero = /[A-Z]|\s|[a-z]/;
    var flag = true;
    if(validarCaracteres.test(direccion) || direccion === "null" || direccion ===""
        || validarCaracteres.test(telefono) || telefono ==="null" || telefono ==="" ||
         validarNumero.test(telefono)){
            alertify.error('No puede dejar vacío el campo de opinión, ni colocar caracteres especiales');
            document.getElementById('telefono').value = "";
            document.getElementById('direccion').value="";
            flag = false;
    }
    if(flag){
        alertify.success('Edición exitosa');
        document.getElementById('telefono').value = "";
        document.getElementById('direccion').value="";
    }
}

function Ver(){
    alertify.alert('Grupo Gestión Inmobiliaria', 'Más información del inquilino', function(){
        alertify.success('Ok'); window.location="admin.html";})
}

function BorrarCita(){
    alertify.confirm("¿Esta seguro que desea Borrar la cita.?",function(){
        alertify.success('Cita eliminada exitosamente');},function(){
            alertify.error('La cita no se ha eliminado');
  });
}

function AprobarCita(){
    alertify.confirm("¿Esta seguro que desea aprobar la cita.?",function(){
        alertify.success('Cita aprobada exitosamente');},function(){
            alertify.error('La cita no se ha aprobado');
  });
}

function VerDetalles(){
    alertify.alert('Grupo Gestión Inmobiliaria', 'La cita sera en tal oficina ', function(){
        alertify.success('Ok'); window.location="consultar_cita_admin.html";})
}

function ReporteOpinion(){
    alertify.alert('Grupo Gestión Inmobiliaria - Reporte', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.', function(){
        alertify.success('Ok'); window.location="consultar_opinion.html";})
}
