$(document).ready(function(){
	$("#myValidForm").validate({
			rules: {
				name_of_person: "required",
				name_of_person: {
					required: true,
					minlength: 3
				},
				email_of_person: "required",
				email_of_person: {
					required: true,
					email: true,
				},
			},
			messages: {
				name_of_person: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 3 characters"
				},
				email_of_person: "Please enter a valid email address"
			}
		});
});

