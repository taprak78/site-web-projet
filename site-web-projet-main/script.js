function somme()
{
	var a = document.getElementById("t1").value;
	var b = document.getElementById("t2").value;
	var c = Number(a) + Number(b);
	document.getElementById("resultat").value=c;
}

function soustraction()
{
	var a = document.getElementById("t1").value;
	var b = document.getElementById("t2").value;
	var c = Number(a) - Number(b);
	document.getElementById("resultat").value=c;
}

function produit()
{
	var a = document.getElementById("t1").value;
	var b = document.getElementById("t2").value;
	var c = Number(a) * Number(b);
	document.getElementById("resultat").value=c;
}

function division()
{
	var a = document.getElementById("t1").value;
	var b = document.getElementById("t2").value;
	var c = Number(a) / Number(b);
	if (b == 0 || a == 0){
		document.getElementById("resultat").value="Error";
	}

	else{
	var c = Number(a) / Number(b);
	document.getElementById("resultat").value=c;
	}
}


function permutation() {
    let n1 = document.getElementById("t1").value;
    let n2 = document.getElementById("t2").value;

    let temp;

    temp = n1;
    n1 = n2;
    n2 = temp;

    document.getElementById("t1").value = n1;
    document.getElementById("t2").value = n2;
}

function pair()
{
    var a = document.getElementById("t1").value
	if (a % 2 ==0){
    	document.getElementById("resultat").value = " Paire "
	}
	else{
    	document.getElementById("resultat").value = " Impaire "
	}
}

function effacer() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("resultat").value = "";
}