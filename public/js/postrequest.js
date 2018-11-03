$( document ).ready(function() {
    $("#customerForm").submit(function(event) {
		event.preventDefault();
		ajaxPost();
		
	});
    
    function ajaxPost(){
    	
    	var formData = {
    		message : $("#message").val(),
    	}
    
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "api/messages/save",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(customer) {
				console.log('message posté');
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    	
    	resetData();

    }
    
    function resetData(){
    	$("#message").val("");
    
	}


})