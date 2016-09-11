/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var xhr;
    function crearObjeto(){
        if(window.ActiveXObject){
            xhr= new ActiveXObject("Microsoft.XMLHttp");
        }
        else if((window.XMLHttpRequest)||(typeofXMLHttpRequest)!= undefined){
            xhr=new XMLHttpRequest();
        }
        else{
            alert("Su navegador no soporta AJAX");
            return;
        }
    }
    

function crearBase(){
    crearObjeto();
    var base=document.getElementById("nomBase").value;
    alert(base);
    xhr.open("POST","CrearBase",true);
    xhr.onreadystatechange=verificaDetalle;
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send("base="+base);
    alert("envio "+base);
    
}


//function prueba(){
   // alert();
//}


function verificaDetalle(){
     if(xhr.readyState==4){
      document.getElementById("resultado").innerHTML=xhr.responseText;
     }
 }
 
function agregarCampo(){
    crearObjeto();
    xhr.open("POST","AgregarCampo",true);
    xhr.onreadystatechange=detalleCampo;
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(null);
}

function detalleCampo(){
     if(xhr.readyState==4){
      document.getElementById("campo").innerHTML=xhr.responseText;
     }
 }
 
 
