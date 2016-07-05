/*video 12//
(function(){
  var a=document.querySelector("p");
  alert(a.parentNode.tagName);
}());*/

/*(function(){
  var p=document.getElementsByTagName("p");
   alert(p.length);
   var el=document.createElement("p");
   document.body.appendChild(el);
   alert(p.length);
}()); */


//create a node dynamically
(function() {

var el=document.createElement("p"),
content=document.createTextNode("<strong> This was dynamically created</strong>");
el.appendChild(content);

el.id="baracade";
el.setAttribute("align", "center");
document.body.appendChild(el);
}());
