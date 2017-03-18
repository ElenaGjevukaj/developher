/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});


$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});

    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color","#A0A0A0");
        } else {
            $("#navigation").css("background-color","rgba(16, 22, 54, 0.2)");
        }
    });

	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */

	var slideHeight = $(window).height();

	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
	});


	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */


    // portfolio filtering

    $(".project-wrapper").mixItUp();


	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});

	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */

	$('#facts').parallax("50%", 0.3);

	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	"use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */


    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });

});


// ==========  START GOOGLE MAP ========== //
function initialize() {
    var myLatLng = new google.maps.LatLng(42.655102, 21.164865);

    var mapOptions = {
        zoom: 14,
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
        }
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: 'img/location-icon.png',
        title: '',
    });

}

google.maps.event.addDomListener(window, "load", initialize);
// ========== END GOOGLE MAP ========== //

/* ========================================================================= */
/*	Contact section scripts
/* ========================================================================= */

$('.pull-right>a').click(function(){
	$( "input#name" ).keyup(function() {
    var name = $( this ).val();
    $('#name').attr('value',name);
  }).keyup();
$( "input#email" ).keyup(function() {
    var email = $( this ).val();
    $('#email').attr('value',email);
    // $( "p" ).text( value );
  }).keyup();
$( "textarea#Message" ).keyup(function() {
    var message = $( this ).val();
    $('#Message').attr('value',message);
    // $( "p" ).text( value );
  }).keyup();
	var e_name = $("#name").attr("value");
	var e_email = $("#email").attr("value");
	var e_message = $("#Message").attr("value");
	var mailto = 'mailto:yg@spinpagency.com';
	var subject = 'subject=Say%20hello%20to%20us';
	var body_of_email = 'body=Name:'+e_name+'%0AEmail:'+e_email+'%0AMessage:'+e_message;
	var a_href = mailto+'?'+subject+'&'+body_of_email;7
	if(e_name.length >2 && e_email.length >2 && e_message.length>2)
	{$('button.pull-right>a').attr('href',a_href);}
	else{
		alert ('You must fill all fields before pressing Send.');
	}
});


$(document).ready(function(){
	var about_us_text = $('.get-text').text();
	$('.set-text').html(about_us_text);
})
