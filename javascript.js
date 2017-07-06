/*

* © 2015 EHR. Todos os direitos reservados.

--------escrito por: Eugenio do Rosario.------------

*/


var acertos = 1, erros = 1; //Variaveis globais

window.onload= function()
{
	val1 = document.getElementsByTagName("input")[0].value = Math.floor(Math.random()*10+1);
	val2 = document.getElementsByTagName("input")[1].value = Math.floor(Math.random()*10+1);
	
	var btn = document.getElementsByTagName("button")[0];
	btn.addEventListener("click",verifyResult,false);

	
}

                /*=============VERIFICANDO O RESULTADO================*/


function verifyResult()
{	
	//MULTIPLICANDO OS VALORES DOS CAMPOS PARA OBTER O RESULTADO
	var resultado = val1*val2;

	var resp = document.getElementsByTagName("input")[2].value;

	var span = document.getElementsByTagName("span")[0];
	
	/* SE A RESPOSTA FOR IGUAL AO RESULTADO O SISTEMA INFORMA AO USUARIO
	E TODOS PROCESSO SE REPETE */
	if (resp == resultado) 
	{
		span.style.color = "#43CD80";
		span.innerHTML = "Parabens, voce acertou o resultado!";
		
		val1 = document.getElementsByTagName("input")[0].value = Math.floor(Math.random()*10+1);
		val2 = document.getElementsByTagName("input")[1].value = Math.floor(Math.random()*10+1);

		document.getElementsByTagName("input")[2].value = ""; // O CAMPO DA RESP FICA VAZIO

		//Incrementando o numeros de acertos
		document.getElementsByTagName("span")[1].innerHTML = "Acertos: " + acertos++;
		
	}


	else if(resp == "")
	{
		alert("Por favor, preencha a resposta no campo!");
	}

	 else if (resp != resultado)
	 {
	 	span.style.color = "#FF0000";
		span.innerHTML = "Resultado incorreto, tente novamente!";
		
		document.getElementsByTagName("input")[2].value = "";

		//INCREMENTANDO O NUMERO DE ERROS
		document.getElementsByTagName("span")[2].innerHTML = "Erros: " + erros++;
	}
	
}

