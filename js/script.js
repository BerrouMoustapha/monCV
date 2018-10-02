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

//Question n°: 03
/*function opacy(id)
	{  
 
		var di ;
		di = document.getElementById(id);
 		di.style.opacity += 3;
		di.filters.alpha.opacity+=5;
 
	}
 */
 
function relanti(id)
{
	
  setTimeout(afficherMasquer(id), 5000); 
}