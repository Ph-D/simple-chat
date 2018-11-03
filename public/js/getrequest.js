
function ajaxGet(){
		$.ajax({
			type : "GET",
			url : window.location + "api/messages/all",
			success: function(result){
				$('#getResultDiv ul').empty();
				var custList = "";
				$.each(result, function(i, customer){
					$('#getResultDiv .list-group').append(customer.message + "<br>")
				});
				console.log("Success: ", result);
			},
			error : function(e) {
				$("#getResultDiv").html("<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
		});	
}

$(document).ready(function() {
	setInterval(function(){
	ajaxGet()}, 1000)});