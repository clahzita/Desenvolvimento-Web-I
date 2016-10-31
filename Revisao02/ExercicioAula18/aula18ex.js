function Pessoa(firstName,lastName,birthday,altura, peso,sexo){
			
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = birthday;
	this.altura = altura;
	this.peso = peso;
	this.sexo = sexo;

	this.nomeCompleto = function(){
		var fullName = this.firstName + " " + this.lastName;
		return fullName;
	}
	this.idadeAtual = function(){
		var nascimento = this.birthday.split("-");
		return 2016 - nascimento[0];
	}
	this.dataNascimento = function () {
		return this.birthday;
	}

	this.diaNascimento = function() {
		var nascimento = this.birthday.split("-");

		return nascimento[2];
	}

	this.mesNascimento = function() {
		var nascimento = this.birthday.split("-");
		return nascimento[1];
	}

	this.imc = function(){
		var altMetro = this.altura/100;
		var imc = this.peso/(altMetro*altMetro);
		return imc;
	}
}

function cadastrar(){
	firstName = prompt("Digite o primeiro nome");
	lastName = prompt("Digite o ultimo nome:");
	birthday = prompt("Data de nascimento","aaaa-mm-dd");
	altura = prompt("Altura (em cm):");
	peso = prompt("Peso (em kg):");
	sexo = prompt("Sexo:");

	var pessoa = new Pessoa(firstName,lastName,birthday,altura,peso,sexo);

	var tbody = document.getElementById("cadastros");
	var row = tbody.insertRow();
	row.insertCell().innerHTML = pessoa.nomeCompleto().toUpperCase();
	row.insertCell().innerHTML = pessoa.idadeAtual();
	row.insertCell().innerHTML = pessoa.sexo;
	row.insertCell().innerHTML = pessoa.dataNascimento();
	row.insertCell().innerHTML = pessoa.imc().toFixed(2)

}