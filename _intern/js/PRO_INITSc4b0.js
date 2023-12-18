$(function() {

	// Fancybox ------------------------------------------
	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	// Formular HELP PopUp  ------------------------------------------
	$( "#helpselect" ).change(function() {
		if($(this).val()=='ja') {
			$('#weg').fadeIn('slow');
		}else{
			$('#weg').fadeOut('slow');
		}	
	});



	$('#burgerbutton').click(function(){

		//$('#mobilemenu').animate({right: '0'}, 500);
		$('#mobilemenu').slideDown('fast');
		$('#burgerbutton').hide('fast');
		$('#close').fadeIn('slow');
	});

	$('#close').click(function(){

		//$('#mobilemenu').animate({right: '-270px'}, 500);

		$('#mobilemenu').slideUp('fast');
		$(this).fadeOut('fast');
		$('#burgerbutton').show('fast');
	});

	$('#mobilenav a.alevel1').click( function() {

		$(this).next('.dlevel1').slideToggle('slow', function() {
		});

	});

	$('#mobilenav a.alevel2').click( function() {
		$(this).next('.ulevel2').slideToggle('slow', function() {
		});
	});






	$('#header_slider').slick({
		autoplay:true,
		pauseOnHover:true,
		dots: true,
		variableWidth:false,
		adaptiveHeight:true,
		arrows:false,
		autoplaySpeed:3000,
		speed: 2000,
		fade:true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		
		
		responsive: [
    {
      breakpoint: 584,
      settings: {
        
        dots: false,
				adaptiveHeight:false
      }
			}
			]
	});



	$('#galerie_main').slick({

		autoplay:false,
		pauseOnHover:true,
		dots: true,
		variableWidth:false,
		adaptiveHeight:true,
		arrows:true,
		autoplaySpeed:3000,
		speed: 2000,
		fade:false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,

		asNavFor: '.slider_nav'
	});


	$('#galerie_nav').slick({
					/*
		autoplay:false,
		pauseOnHover:true,
		dots: false,
		variableWidth:false,
		adaptiveHeight:true,
		arrows:true,
		autoplaySpeed:3000,
		speed: 2000,
		fade:false,
		infinite: true,
			 centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
  asNavFor: '.slider_main'
	*/



		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '40px',
		infinite: true,
		//asNavFor: '.slider_main',
		asNavFor:'#galerie_main',
		dots: false,
		variableWidth: true,
		draggable:false,
		focusOnSelect: true

	});



	function bildpos(){
		var x=$('#header_slider').outerHeight();
		var y=$('#header_slider .slick-slide img').outerHeight();
		if(y>x)
		{
			var z=(y-x)/-2;	
			//$('#header_slider .slick-track').css('top',z);
			$('#header_slider .slick-track img').css('margin-top',z);
		}
		//console.log('bild:' + y +'div: '+ x + 'top: ' + z)
	}


	function bildpos_static(){
		var a=$('#header').outerHeight();
		var b=$('#header .bild img').outerHeight();
		if(b>a)
		{
			var c=(b-a)/-2;	
			$('#header .bild img').css('top',c);
		}

		//console.log('bild:' + b +'div: '+ a + 'top: ' + c)
	}


	$( window ).load(function() {
		bildpos();
		bildpos_static();
	});


	$(window).resize(function() {
		bildpos();
		bildpos_static();
	});



	// Heplcenter ------------------------------------------
	
	function helpcenter_close()
	{
	$('#helpcenter_content').slideUp('fast');
		$('#helpcenter').animate({right: pos_right}, 100, function() {});
		$('#helpcenter').removeClass('open').addClass('closed');
	}
	
	var pos_right = $('#helpcenter').css('right');
	$('#helpcenter_head').click( function()	{		
		// ausfahren
		$('#helpcenter').animate({
			"right": "0px" 
		}, { 
			duration: 500,
			complete: function() {
				// danach aufklappen
				$('#helpcenter_content').slideDown('500');
			}
		});
		$('#helpcenter').addClass('open').removeClass('closed');
	});

	$('#helpcenter_close').click(function(){
	helpcenter_close();
		});
	
	
	$( window ).scroll(function() {
	//	helpcenter_close();
		
		})




function scrolled() {
	if ($('#burgerbutton').is(':visible')){
     $('#helpcenter').fadeOut(100);
    $(this).off('scroll')[0].setTimeout(function(){
         $('#helpcenter').fadeIn();
        $(this).on('scroll',scrolled);
    }, 1000)
}
	}
//$(window).on('scroll',scrolled);



	$(document).on("click", '.ankerscroll', function(event) {
		event.preventDefault();
		var anker= $(this).attr("href");
		$('html,body').animate({
			scrollTop: ($(anker).offset().top)
		}, 1000, 'easeInOutQuart', function (){
			location.hash = anker;
		});
	});



	function trigger_ort_aj()
	{

 
 
 var st_id= new URL(location.href).searchParams.get('sel_stadtteil');
 //console.log(st_id);


		var $this = $('#sel_ort');
		var ort_query = '?ort_id=' + $this.val() + '&sel_stadtteil=' + st_id;
				var query_string=ort_query;

		$.ajax({
			type: "POST",
			//url: "/wohnungen/aj_ort.php" +query_string,
			url: "/wohnungen/we_aj_ort.php" +query_string,
			data: {
				method: "load_template"
			},
			success: function(content) {
				$("#antwort_stadtteil").html(content);
			
			}
		});
		//console.log(query_string);
		return false;
	}
	$('#sel_ort').on('change', function(){				
		trigger_ort_aj();

	});
	
	
	trigger_ort_aj();



$('#news .item .arr_d, #news .item .head_ct h3').on('click', function(){
$(this).parent().parent().find($('.teaser')).slideToggle();
$(this).toggleClass('open');
req();
});


function req()
{
$('.whg_bewerbung .row .value input').each(function(){

if (($(this).is(':visible'))&&($(this).data('required')==true) )

{

$(this).attr('required',true);

}

else
{

$(this).attr('required',false);

}

});

}







$('.whg_bewerbung .row .value input').each(function(){


if (($(this).attr('required')) || ($(this).data('required')==true))
{

$(this).parent().parent($('.row')).find($('.desc')).append('<span class="pflicht_ct"></span>') ;
$(this).parent().parent($('.row')).find($('.desc .pflicht_ct')).html(' <span class="pflicht">*</span>');
}




});

req();


$('.oc').on('click', function(){
/*
$('.row').toggleClass('open');
$('.oc').toggleClass('open');
*/
$('.row').not('.hd').toggleClass('open');

$('.oc').toggleClass('open');

req();
});







$('input[name="Haustiere"]').on('change', function(){
if($(this).val()=='ja')
{


$(this).parent().parent().parent($('.block')).find($('.hd')).addClass('o').removeClass('hd');
req();
}
else
{
$(this).parent().parent().parent($('.block')).find($('.o')).addClass('hd').removeClass('o');
}

});


$('input[name="bereits_Mitglied"]').on('change', function(){
if($(this).val()=='ja')
{
$('[data-x="m_nummer"]').css('display','flex');
$('[data-x="m_nummer"]').find('input').attr('required',true);

}
else
{
$('[data-x="m_nummer"]').css('display','none');
$('[data-x="m_nummer"]').find('input').attr('required',false);
}

});


$('input[name="Partner bereits_Mitglied"]').on('change', function(){
if($(this).val()=='ja')
{
$('[data-x="p_nummer"]').css('display','flex');
$('[data-x="p_nummer"]').find('input').attr('required',true);

}
else
{
$('[data-x="p_nummer"]').css('display','none');
$('[data-x="p_nummer"]').find('input').attr('required',false);
}

});

/*

	$('#auswahl .auswahl_ort img').click(function(){
		var ziel =window.location.href+'&sel_ort=&sel_stadtteil=';
		window.location = ziel;
	});
	$('#auswahl .auswahl_stadtteil img').click(function(){
		var ziel =window.location.href+'&sel_stadtteil=';
		
		
		window.location = ziel;
	});
*/




	// Ende document.ready
});

