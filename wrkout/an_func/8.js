var myCar = new Object(),
 z = "make",
 Name="nname";
myCar[z] = "Ford";
//myCar["wheels"]="4";
z = "model";
myCar[z] = "Mustang";
z = "type";
myCar[z] = "SUV";
//myCar[z  ]            = "Dot syntax";

myCar[Name]="Audii";
//console.log(myCar.make);

function showProps(myCar, myCar) {
  var result = "";
  for (var i in myCar) {
    if (myCar.hasOwnProperty(i)) {
      result += myCar + "." + i + " = " + myCar[i] + "\n";
    }
  }
  return result;
}
