
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


$(document).ready(
	function() {
		$("#bloco").click(
			function() {
				$(this).fadeOut(10000);
			}
		);
	}
)

$(document).ready(
	function() {
		$("#opa").click(
			function() {
				$("#bloco").css("background-color","orange");
				$("#bloco").show();
			}
		);
	}
)

$(document).ready(
	function() {
		$("a").click(
			function() {
				alert("Onde vc vai?");
			}
		);
	}
)