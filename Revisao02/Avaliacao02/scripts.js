var alunos = [];

function Aluno(nome,email,sexo,dias){
			
	this.nome = nome;
	this.email = email;
	this.sexo = sexo;
	this.dias = dias;
/*
	this.nome = function(){
		return this.nome;
	}

	this.email = function(){
		return this.email;
	}

	this.sexo = function(){
		return this.sexo;
	}

	this.dias = function(){
		return this.dias;
	}
*/
}

function criarAluno(){


	var nome = document.forms.cadastroCompleto.nomeCompleto.value;
	var email = document.forms.cadastroCompleto.email.value;

	var sexo;
	if(document.forms.cadastroCompleto.sexo[0].checked == true){
		sexo = document.forms.cadastroCompleto.sexo[0].value;
	}else{
		sexo = document.forms.cadastroCompleto.sexo[1].value;
	}

	var dias =[];

	for(var i = 0;i<5;i++){
		if(document.forms.cadastroCompleto.diadasemana[i].checked == true){
			dias[i] = document.forms.cadastroCompleto.diadasemana[i].value;	
		}
	}

	var aluno = new Aluno(nome,email,sexo,dias);

	alunos.push(aluno);

	return aluno;

}

function inserirNaTabela(aluno){

	var tbody = document.getElementById("cadastros");
	var row = tbody.insertRow();
	row.insertCell().innerHTML = aluno.nome;
	row.insertCell().innerHTML = aluno.email;
	row.insertCell().innerHTML = aluno.sexo;
	
	var aux = "";

	for(var i=0;i<aluno.dias.length;i++){
		aux += aluno.dias[i]+"</br>";
	}

	row.insertCell().innerHTML = aux;
	
}


function validarCadastro(){
	var check = true;

	if(document.forms.cadastroCompleto.sexo[0].checked == false && document.forms.cadastroCompleto.sexo[1].checked == false){
		alert("O sexo deve ser definido.")
		check = false;
	}

	if(document.forms.cadastroCompleto.nomeCompleto.value == ""){
		alert("O nome deve ser informado.")
		check = false;
	}

	if(document.forms.cadastroCompleto.email.value == ""){
		alert("O email deve ser informado.")
		check = false;
	}


	if(check){
		inserirNaTabela(criarAluno());
		

	}

}

