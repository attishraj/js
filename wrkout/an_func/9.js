


function readTextFile("C:\Users\trainee\Downloads\datafile.csv") {
	var str = "";
	var txtFile = new File(filepath);
	txtFile.open("r");
	while (!txtFile.eof) {
		// read each line of text
		str += txtFile.readln() + "\n";
	}
	return str;
}
console.log(readTextFile());
