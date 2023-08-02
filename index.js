function encriptar(){
    let texto =document.getElementById("texto").value ;
    let muñeco= document.getElementById("muneco");
    let parrafo= document.getElementById("parrafo");
    let tituloMensaje = document.getElementById("alerta-mensaje");


    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/u/gi, "tst") 
    .replace(/a/gi, "susp")
    .replace(/i/gi, "sas")
    .replace(/o/gi, "opas");

    if (texto.length != 0 ){
        document.getElementById("texto").value= textoCifrado;
        tituloMensaje.textContent = "Texto Encriptado con exito";
        parrafo.textContent="";
        muñeco.src = "img/encriptado.jpg";
    }else{
        muñeco.src = "img/muñeco.png";
        tituloMensaje = "Ingrese el texto que desea encriptar o desencriptar"
        alert("Debes ingresar algun texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let muñeco= document.getElementById("muneco");
    let parrafo= document.getElementById("parrafo");
    let tituloMensaje = document.getElementById("alerta-mensaje");


    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/tst/gi, "u" )
    .replace(/susp/gi, "a")
    .replace(/sas/gi, "i")
    .replace(/opas/gi, "o");

    if(textoCifrado != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto Desencriptado";
        parrafo= "";
        muñeco.src = "img/desencriptado.jpg"
    }else{
        muñeco.src = "img/muñeco.png";
        alert("No hay texto para Desencriptar");
    }

}

    