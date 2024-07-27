function fermer_im()
{
	$('#bd_noire').css('display', 'none'); 
	$('#img_gros').attr('src', '');
}

function img_grand(im, i)
{
	var haut = parseInt($(window).height()) - parseInt($(window).height())/10;
	var large = $(window).width();
	if (i == "1")
	{
		$('#img_gros').css('width', '60%');
		$('#img_gros').css('height', 'auto');
	}
	else
	{
		$('#img_gros').css('height', haut+'px');
		$('#img_gros').css('width', 'auto');
	}
	$('#bd_noire').css('display', ''); 
	$('#img_gros').attr('src', im);
}
$(document).ready(function() {
	
	console.log($("section div").not('.row')); 
	 
	
});