
$("#valid").click(function(){

	if($('#r1').is(':checked')){
		$('#image_1').attr('src','/home/laurent/Images/valid.png');
		$('#image_1').css('display', 'block');
		$('#reponse_1').css('display', 'block');
		$('#reponse_1').css('color', 'green');
        }else{
        	$('#reponse_1').css('display', 'block');
        	$('#reponse_1').css('color', 'red');
        	$('#image_1').attr('src','/home/laurent/Images/false.png');
        	$('#image_1').css('display', 'block');
        } 
        if($('#r4').is(':checked')){
        	$('#image_2').attr('src','/home/laurent/Images/valid.png');
        	$('#image_2').css('display', 'block');
        	$('#reponse_2').css('display', 'block');
        	$('#reponse_2').css('color', 'green');
        }else{
        	$('#reponse_2').css('display', 'block');
        	$('#reponse_2').css('color', 'red');
        	$('#image_2').attr('src','/home/laurent/Images/false.png');
        	$('#image_2').css('display', 'block');
        } 
        if($('#r8').is(':checked')){
        	$('#reponse_3').css('display', 'block');
        	$('#reponse_3').css('color', 'green');
        	$('#image_3').attr('src','/home/laurent/Images/valid.png');
		    $('#image_3').css('display', 'block');
        }else{
        	$('#reponse_3').css('display', 'block');
        	$('#reponse_3').css('color', 'red');
        	$('#image_3').attr('src','/home/laurent/Images/false.png');
        	$('#image_3').css('display', 'block');
        } 

	});

 $("#reset").click(function(){

 	$(':radio').prop('checked', false);

 	$('#reponse_1').css('display', 'none');
    $('#image_1').css('display', 'none');

    $('#reponse_2').css('display', 'none');
    $('#image_2').css('display', 'none');

    $('#reponse_3').css('display', 'none');
    $('#image_3').css('display', 'none');

 	});