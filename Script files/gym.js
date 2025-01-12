function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y=document.forms["myForm"]["prenom"].value;
    let z=document.forms["myForm"]["email"].value;
    let t=document.forms["myForm"]["num"].value;

    if( (x == "")||(x.length>12)||(isNaN(x)==false)) {
      alert("nom doit etre non vide , alphabetique et <12 ");
      return false;
    }
    if( (y == "")||(y.length>12)||(isNaN(y)==false)) {
      alert("prenom doit etre non vide , alphabetique et <12 ");
      return false;
    }
    if((z.indexOf('@')==-1)||(z.indexOf('.')<0))
    {
alert("l'adress mail doit etre valide");
return false ;


    }
if((isNaN(t)==true)||(t.length!=8))

{
alert("numero telephone doit etre composer de 8 numero")



}




  }  