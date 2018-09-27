//Question n°: 01
/*
function afficherMasquer(id)
{

var x = document.getElementById(id);

  if(x.style.display == "none")
   x.style.display = "block";

   else
   x.style.display = "none";
}
//Question n°: 02
*/
  function afficherMasquer(thingId){
    var targetElement;
    var elements;
    targetElement = document.getElementById(thingId) ;

    if (targetElement.style.display == "block")
    	targetElement.style.display = "none";
     else 

    	targetElement.style.display = "block";
    // recupere tous les elements ayant pour nom de classe "Element"
    elements = document.getElementsByClassName("Element")
   
    // parcoure tous ces elements et les cache
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none" ;
    }
       
    //affiche uniquement l element selectionné
    if (targetElement.style.display == "none") {
            targetElement.style.display = "" ;
    }
}