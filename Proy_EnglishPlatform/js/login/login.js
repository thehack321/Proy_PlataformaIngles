$(document).ready(function() {
	
	
	
	// Values in Forms
	$('#subForm .email').watermark();
	$('#name-field').watermark();
	$('#email-field').watermark();
	$('#phone-field').watermark();
	$('#company-field').watermark();
	$('#comments-field').watermark();
	$('#author').watermark();
	$('#email').watermark();
	$('#url').watermark();
	$('#comment').watermark();

	
	//Form Validation
	$(".theme-form").each(function() {
		$(this).validate();
	});
	
	
});