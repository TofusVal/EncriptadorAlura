/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 
e --> enter 
o --> ober 
i --> imes 
a --> ai 
u --> ufat
*/

/*Necesito que el código me tome la información escrita en el text area izquierdo para poder encriptarlo a la derecha

function getTextAreaValue(){
    let textArea = document.getElementById("textIzq");
    let userInput = textArea.value;
    console.log(userInput);
}

function encriptar (){

    var cifrado = getTextAreaValue.replace(/e/img,"enter");
    var cifrado = cifrado.replace(/i/img,"imes");
    var cifrado = cifrado.replace(/a/img,"ai");
    var cifrado = cifrado.replace(/o/img,"ober");
    var cifrado = cifrado.replace(/u/img,"ufat");
    console.log(cifrado);
}*/

// Variables principales para trabajar en el código
var btnencriptar = document.querySelector(".btn-encriptar");
var btndesencriptar = document.querySelector(".btn-desencriptar");
var lumalee = document.querySelector(".img-lumalee");
var mensaje = document.querySelector(".textoSinMensaje1");
var texto = document.querySelector(".textoSinMensaje2");
var mensajeresultado = document.querySelector(".mensaje-resultado");
var btncopiar = document.querySelector(".btn-copiar"); 
var encriptardes = document.querySelector(".encriptar-desencriptar");
var pegar = document.querySelector(".textIzq");


btnencriptar.onclick = encriptar;
btndesencriptar.onclick = desencriptar;
btncopiar.addEventListener("click", copyText);


function encriptar(){
    ocultarDerecha();
    var textorecuperado = recuperarTexto();
    mensajeresultado.textContent = encriptartexto(textorecuperado);
    encriptardes.textContent = "Mensaje encriptado🔒: "
}


function desencriptar(){
    ocultarDerecha();
    var textorecuperado = recuperarTexto();
    mensajeresultado.textContent = desencriptartexto(textorecuperado);
    encriptardes.textContent = "Mensaje desencriptado🔓: "
}

//Función para recuperar el texto dispuesto en la sección izquierda
function recuperarTexto(){
    var texarea = document.querySelector(".textIzq")
    return texarea.value;
}

//Función declarada para que cuando encripte se oculte el pochita y el texto
function ocultarDerecha(){
    lumalee.classList.add("hide");
    mensaje.classList.add("hide");
    texto.classList.add("hide");
}

//Función encriptadora con iteraciones de for (3 partes mandatorias)
//1.- Iniciador de variable "i" condición. 
//2- varible "i" menor que mensaje.lenght (longuitud del texto)
//3.- sumarizador de la variable "i"

function encriptartexto(texto){
    var mensaje = texto;
    var textoresultado = "";

    for(var i=0; i<mensaje.length; i++){
        if(mensaje[i] == "a"){
            textoresultado = textoresultado + "ai"
        }
        else if(mensaje[i] == "e"){
            textoresultado = textoresultado + "enter"
        }
        else if(mensaje[i] == "i"){
            textoresultado = textoresultado + "imes"
        }
        else if(mensaje[i] == "o"){
            textoresultado = textoresultado + "ober"
        }
        else if(mensaje[i] == "u"){
            textoresultado = textoresultado + "ufat"
        }

        else {
            textoresultado = textoresultado + mensaje[i];
        }
    }

    return textoresultado;
}

//Función desencriptar es lo mismo que la encriptada pero sin las llaves, en su lugar se agregan las vocales
function desencriptartexto(texto){
    var mensaje = texto;
    var textoresultado = "";

    for(var i=0; i<mensaje.length; i++){
        if(mensaje[i] == "a"){
            textoresultado = textoresultado + "a"
            i = i+1;
        }
        else if(mensaje[i] == "e"){
            textoresultado = textoresultado + "e"
            i= i+4;
        }
        else if(mensaje[i] == "i"){
            textoresultado = textoresultado + "i"
            i=i+3;
        }
        else if(mensaje[i] == "o"){
            textoresultado = textoresultado + "o"
            i=i+3;
        }
        else if(mensaje[i] == "u"){
            textoresultado = textoresultado + "u"
            i=i+3;
        }

        else {
            textoresultado = textoresultado + mensaje[i];
        }
    }

    return textoresultado;
}


//Función declarada para que cuando se copie el texto se muestre el lumalee y el texto
function mostrarDerecha(){
    lumalee.classList.remove("hide");
    mensaje.classList.remove("hide");
    texto.classList.remove("hide");
}

//Función de copiar texto con alerta al usuario de que se ha copiado con éxito

function copyText(){
    navigator.clipboard.writeText(mensajeresultado.innerText);
    alert("Texto copiado con éxito.")
    pegar.value = mensajeresultado.innerText;
    mensajeresultado.textContent = "";
    encriptardes.textContent = "";
    mostrarDerecha();
  }