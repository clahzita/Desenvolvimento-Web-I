
//Ao	clicar	no	bloco	primeiro	parágrafo,	ele	mude
//para	cor	verde	a	div	de	id=“bloco”.
$(document).ready(
	function() {
		$("p:first").click(
			function() {
				$("#bloco").css("background-color","green");
			}
		);
	}
)