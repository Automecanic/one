/* recoge el evento del  documento cuanto esta cargado y ejecuta la  funcion  ecogiendo el evento */
/*document.addEventListener("DOMContentLoaded",function(event) {*/

   const btnToggle= document.querySelector('.toggle-btn');
 btnToggle.addEventListener('click', function(){
    var control=document.getElementById('sidebar').classList.toggle('active');
     if (control){
         /*controla  los elementos  de dentro del Tag span y pone una x si esta extendido*/
         document.getElementById('sp').innerHTML="x";
     }
     else {
        document.getElementById('sp').innerHTML='&#9776;';
     }

});
/*});*/