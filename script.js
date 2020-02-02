$(document).ready(function(){

	$('#dataShow').click(function()
	{
		var json = {
			"name":$('#name').val(),
			"age":$('#age').val(),
			"dept":$('#dept').val(),
			"prog":$('#prog').val()
		};
		var data = JSON.stringify(json);
		$.ajax({
			url:'data.php',
			method:'POST',
			data:'info='+data,
			success: function(response){
				var object = JSON.parse(response);
				var d = 'Name: '+object.name+'\n'+'Age: '+object.age+'\n'
						+'Department: '+object.dept+'\n'+'Programme: '+
						object.prog;
				alert(d);
			},
			error: function(error){
				alert(error.status);
			}
		});
		
	});

});