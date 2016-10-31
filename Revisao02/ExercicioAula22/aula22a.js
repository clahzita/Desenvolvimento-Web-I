$(document).ready(function(){
    $("p").click(function(){
        $(this).addClass("formatacaoBack");
    });
});

$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).removeClass("formatacaoBack");
    });
});



$(document).ready(function(){
	$(window).unload(
		function(event){
			alert("JÃ¡ vai?");
		}
	);
});


$(document).ready(function(){
    $("#divTitulo").click(function(){
        $(this).addClass("formatacaoSize");
    });
});
