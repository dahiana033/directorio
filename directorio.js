
let amigos=[];
let btnGuardar=document.querySelector("#btnGuardar");
let btnCancelar=document.querySelector("#btnCancelar");
let mens=document.querySelector("#alerta");
let lista=document.querySelector(".listaAmigos");
let formulario=document.querySelector("#formulario");
let found;

pintar();

function limpiar(){

    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}


function pintar(){
    if(amigos.length>0)
    {
        lista.innerHTML="";
        amigos.forEach((contacto,index)=>{
            let amigo=document.createElement("div");
            amigo.innerHTML=`<p>${contacto.nombre}</p>
            <button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}" />
            Detalles</button><button class="eliminarContacto" indice="${index}">Borrar</button`;
            lista.appendChild(amigo);
        });
        let botones=document.getElementsByClassName("muestraDetalles");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click",()=>{
            showDetalles(element.children[0].value);
            });
        }
         botones=document.getElementsByClassName("eliminarContacto");
        for (let i = 0; i <botones.length; i++){
            const element = botones [i];
            element.addEventListener("click",()=>{
                amigos.splice(element.getAttribute("indice"),1);
                pintar();
            });
        }

    }
    else{
        lista.innerHTML="<h2>No tenemos amigos</h2>";
    }
}

function showDetalles(tel){
    let detalles=document.getElementById("detallesAmigo");
    let amigo=amigos.find(a=>{
        if(a.telefono==tel)
        {
            return a;
        }
    });
    detalles.innerHTML=`<img src="${amigo.foto}" alt="">
    <h3>${amigo.nombre}<h3/>
    <p><span>Teléfono:</span>${amigo.telefono}<p/>
    <p><span>Correo:</span>${amigo.correo}</p>
    <button id="btnCerrar">Cerrar</button>`;
    detalles.classList.remove("oculto");    

    let btnCerrar=document.getElementById("btnCerrar");
    btnCerrar.addEventListener("click",(Event=>{
        detalles.classList.add("oculto");
    }));

}

btnCancelar.addEventListener("click",(Event)=>{
    limpiar();
    Event.preventDefault();
});
var validation="";
function validateForm(contacto) { 
    
    validation="";

    if(contacto['nombre'] == "")
    validation += "Es necesario poner el nombre ";
    if(contacto['telefono'] == "")
    validation += "Es necesario poner su número de telefono ";
    if(contacto['correo'] == "")
    validation += "Es necesario poner su correo ";
    if(contacto['foto'] == "")
    validation += "Es necesario agregar una foto ";
    
        if(validation=="")
        {
            return true;
        }
        else
        {
            return false;
        }
        
    }

btnGuardar.addEventListener("click",(Event)=>{


    let contacto={
        nombre:formulario["nombre"].value,
        telefono:formulario["telefono"].value,
        correo:formulario["correo"].value,
        foto:formulario["foto"].value
    };

    found = amigos.find(prueba => {
        if (prueba.telefono == formulario[1].value) {
            event.preventDefault();
            return prueba;
           
        } 
    })
    console.log(found);
       
    if (found) {
        console.log("inicio")
       alerta.console.log("repetido");

        alerta.classList.remove("oculto");
        console.log("medio")
    }
    if(validateForm(contacto)){
        amigos.push(contacto);
        
        limpiar();
        pintar();
        
    }
    Event.preventDefault();
});

