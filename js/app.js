const formulario = document.querySelector("#formulario"); 
const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
export const persona =  {

}

document.addEventListener("DOMContentLoaded",() =>{
    formulario.addEventListener("submit",validarCampos);
});

function validarCampos(e){
    e.preventDefault();
    if(nombre.value === "" || email.value === ""){
        alert("Hay campos que están vacíos");
        return;
    }
    persona.nombre = nombre.value;
    persona.email = email.value;
    setTimeout(() =>{
        window.location.href = "topics.html";
    },200);
}