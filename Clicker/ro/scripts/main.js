var n=0;
var cheat=false;
function add(){
	n++;
	document.getElementById("number").innerHTML=n;
	if(cheat==true)document.getElementById("last_ach").innerHTML="oprite; motiv: comanda  'setN()' a fost folosita";
	else if(n>10)document.getElementById("last_ach").innerHTML="n>10";
	if(cheat==true)document.getElementById("last_ach").innerHTML="oprite; motiv: comanda  'setN()' a fost folosita";
	else if(n>100)document.getElementById("last_ach").innerHTML="n>100";
	if(cheat==true)document.getElementById("last_ach").innerHTML="oprite; motiv: comanda  'setN()' a fost folosita";
	else if(n>1000)document.getElementById("last_ach").innerHTML="n>1000";
	
}
function setN(N=0){
	n=N;
	document.getElementById("number").innerHTML=n;
	console.log("n a fost setat la "+n);
	if(N!=0)cheat=true;
	return n;
}
