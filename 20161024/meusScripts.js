$(document).ready(
	function(){
		$("#primeiro").click(
			function(){
				$(this).hide(); //apenas esconde
			}
		)
	}
)

$(document).ready(
	function(){
		$("#bloco").click(
			function(){
				$(".paragrafo").toggle(); //mostra e esconde
			}
		)

		$("#bloco").dbclick(
			function(){
				$(this).hide(); //apenas esconde
			}
		)
	}
)

$(document).ready(
	function(){

		$("h3").click(
			function(){
				$(".bloco").fadeIn(); //mostra e esconde
			}
		)

		$("h3").dbclick(
			function(){
				$(".bloco").fadeOut(); //apenas esconde
			}
		)
	}
)

$(document).ready(
	function(){
		$("#ultimo").click(
			function(){
				$("#primeiro").hide(); //apenas esconde
			}
		)
	}
)