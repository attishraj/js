var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();
// console.log(myObj.myString);
myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(myObj.myString);
