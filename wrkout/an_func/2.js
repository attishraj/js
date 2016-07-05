//1st method of annonymous func//
/*
var add=function(x,y){
  x=x+3;
  x=x+1;
  x=x*8;
  return (x*y);
};
var foo=add(2,2);
alert(foo);   */




//2nd method of annonymous func//
/*var add=function(x,y,fn){
  x=x+3;
  x=x+1;
  x=x*8;
  return fn(x,y);
};

var bar=add(3,2,function(x,y)
{
  return x*y;
});
alert(bar);  */

 //scope  global//

/* var globe="hello";
 var gfunc=function () {
   alert(globe);
   globe="modified hello";
 };
gfunc();
 alert(globe);*/



//scope local//
/*var globe="hello";
var gfunc=function () {
  var loc="this is local";
  alert(loc);
  alert(globe);
  globe="modified hello";
};
gfunc();
alert(globe);
alert(loc);*/   //this will not execute since local variable are accessible only to the function



//detail//

/*var globe="hello";
var gfunc=function () {
  var lfunc=function()
  {
   var superloc="this is local";
   alert(superloc);
 };
  lfunc();
  alert(superloc);
};

gfunc();
alert(superloc);
alert(globe);*/

//objects vid 7//
/*var person={
  firstName:"Attish ",
  lastName:"Raj" ,
  getFullName:function()
  {
    return this.firstName + " "+this.lastName;
  }
}
alert(person.getFullName()); */

//arrays//

/*var names=["Attish" ,"Raj"],
    names2=["hii" ,"hello"];
    var people=names.concat(names2);
    //alert(result);
    var z=people.join(",");
    //alert(z);
    var a=people.reverse();
    //alert(a);
    var b=people.sort();
    alert(b); */

    //loops 1//

var names=["Attish","Raj","lucas","sam"];

  for(var i=0, len=names.length;i<len;i++)
{
  var name=names[i];
  alert(names) ;
}
alert("hfff");

//loop 2//
/*var names=["Attish","Raj","lucas","sam"];
  for(var i=0,len=names.length;i<len;i++)
{
  var name=names[i];
  alert(names) ;
}
alert("hello in new line");*/


//while loop//
/*var names=["Attish","Raj","lucas","sam"];
while (true) {
  alert(names) ;
  }
  alert("hello in new line");
*/
