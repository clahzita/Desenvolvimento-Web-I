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
		var imc = this.peso/(this.altura*this.altura);
		return imc;
	}
}