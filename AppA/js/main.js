var parseOrderForm = function(data){
	// uses form data here;
	console.log(data);
};

$(document).ready(function(){
	
	var oform = $('#form');
	
	oform.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			var data = oform.serializeArray();
			parseOrderForm(data);
		}
	});
	


});