var parseOrderForm = function(data){
	// uses form data here;
	console.log(data);
};

$(document).ready(function(){
	
	var oform = $('#form');
	oferrorslink = $('#oferrorslink')
	;
	
	oform.validate({
		invalidHandler: function(form, validator){
			oferrorslink.click();
			var html = '';
			for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>' + fieldName + '</li>';
			};
			$("#errors ul").html(html);
		},
		submitHandler: function(){
			var data = oform.serializeArray();
			parseOrderForm(data);
		}
	});
	


});