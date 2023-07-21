function encriptar(){
    var texto =document.getElementById("texto").value ;
    let muñeco= document.getElementById("muneco");
    let parrafo= document.getElementById("parrafo");
    let tituloMensaje = document.getElementById("alerta-mensaje");


    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/u/gi, "tst") 
    .replace(/a/gi, "susp")
    .replace(/i/gi, "sas")
    .replace(/e/gi, "term")
    .replace(/o/gi, "trsa");

    if (texto.length != 0 ){
        document.getElementById("texto").value= textoCifrado;
        tituloMensaje.textContent = "Texto Encriptado con exito"
        parrafo.textContent="";
        muñeco.src = "/img/encriptado.jpg";
    }else{
        muñeco.getElementById("muneco").src = "./img/muñeco.png"
        alert("Debes ingresar algun texto");
    }
}