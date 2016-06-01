$(document).on('ready', function(){

	//PAGE NAVIGATION

	//get outer height of .nav-wrapper and store in a variable
	//true includes margins
	// plus 20 adds margin of 20px
	var offset = ($('.nav-wrapper').outerHeight(true) + 15);
		console.log(offset);

	//use jquery to add margin-top to body using the above height (offset)
	$('body').css('margin-top', offset);


	//scroll to the page associated with the link
	$('.nav-main a').on('click', function(event){
		//make it stop jumping
		event.preventDefault();
		//console.log(this);

		//gets name of each ID without you having to type all of them
		var pageToScrollTo = $(this).attr('href');

		//use pageToScrollTo in a .scrollTo function
		//can add the object offset to offset the scroll with the fixed nav
		//needs to be negative
		$(window).scrollTo(pageToScrollTo, 600, {offset: -offset});

		//remove the class on all links
		$('.nav-main a').removeClass('is-current');
		$(this).addClass('is-current');
	});

	// END OF PAGE NAVIGATION




    //IMAGE SLIDER
    autoPlay = setInterval(function(){
        doSlidesNext();
    }, 3000);

    //show first image by default
    $('.col-1 img').eq(0).show();

    var currentSlideNum = 0;
    var slideCount = $('.col-1 img').length;

    var doSlidesNext = function(){
        ///hide current slide

            $('.col-1 img').eq(currentSlideNum).hide();
            //show next slide by increasing current slide by 1
            //left off var to make it global
            currentSlideNum = currentSlideNum + 1;
                console.log(currentSlideNum);

            //if currentSlideNum is the last slide
            //have to subtract 1 because it will automatically add one to the last slide
            if (currentSlideNum === slideCount) {
                // alert('found the last slide');
                currentSlideNum = 0;
                console.log(currentSlideNum);
            }

            // always update currentSlideNum before showing
            $('.col-1 img').eq(currentSlideNum).show();

    };

    var doSlidesPrevious = function(){

            $('.col-1 img').eq(currentSlideNum).hide();

            currentSlideNum = currentSlideNum - 1;
                console.log(currentSlideNum);

            //if currentSlideNum is the first slide
            if (currentSlideNum <= 0) {
                // alert('found the last slide');
                currentSlideNum = slideCount - 1;
                console.log(currentSlideNum);
            }

            $('.col-1 img').eq(currentSlideNum).show();
    };


    //invoke functions
    $('.js-next').on('click', function(){
        doSlidesNext();
    });


    $('.js-previous').on('click', function(){
        doSlidesPrevious();
        
    });








	//TEA

    $(window).load(function(){
            var w = $(window).width();
            if(w > 480) {

            	$('.js-tea1').hover(function () {
                    $('.js-tea1 img').css('opacity', '0.3');
                }, function() {
                    $('.js-tea1 img').css('opacity', '1');
                });


                $('.js-tea2').hover(function () {
                    $('.js-tea2 img').css('opacity', '0.3');
                }, function() {
                    $('.js-tea2 img').css('opacity', '1');
                });


                $('.js-tea3').hover(function () {
                    $('.js-tea3 img').css('opacity', '0.3');
                }, function() {
                    $('.js-tea3 img').css('opacity', '1');
                });


                $('.js-tea4').hover(function () {
                    $('.js-tea4 img').css('opacity', '0.3');
                }, function() {
                    $('.js-tea4 img').css('opacity', '1');
                });


                $('.js-tea5').hover(function () {
                    $('.js-tea5 img').css('opacity', '0.3');
                }, function() {
                    $('.js-tea5 img').css('opacity', '1');
                });


                $('.js-tea6').hover(function () {
                    $('.js-tea6 img').css('opacity', '0.3');
                }, function() {
                    $('.js-tea6 img').css('opacity', '1');
                });




            	//HONEY

            	$('.honey1').hover(function () {
                    $('.honey1 img').css('opacity', '0.3');
                }, function() {
                    $('.honey1 img').css('opacity', '1');
                });


                $('.honey2').hover(function () {
                    $('.honey2 img').css('opacity', '0.3');
                }, function() {
                    $('.honey2 img').css('opacity', '1');
                });


                $('.honey3').hover(function () {
                    $('.honey3 img').css('opacity', '0.3');
                }, function() {
                    $('.honey3 img').css('opacity', '1');
                });


                $('.honey4').hover(function () {
                    $('.honey4 img').css('opacity', '0.3');
                }, function() {
                    $('.honey4 img').css('opacity', '1');
                });


                $('.honey5').hover(function () {
                    $('.honey5 img').css('opacity', '0.3');
                }, function() {
                    $('.honey5 img').css('opacity', '1');
                });


                $('.honey6').hover(function () {
                    $('.honey6 img').css('opacity', '0.3');
                }, function() {
                    $('.honey6 img').css('opacity', '1');
                });

            }
        });


        $(window).load(function(){
            var w = $(window).width();
            if(w <= 480) {
                $('.tea-images img').css('opacity', '0.3');
                $('.honey-images img').css('opacity', '0.3');
            }
        });
            


    //HAMBURGER
        var pull = $('#pull');
            menu = $('nav ul');
            menuHeight = menu.height();

        var slideLeft = false;

        var w = $(window).width();
     

        $("#nav-button").on('click', function(e) {
            e.preventDefault();
            console.log('hello');
            
            if(slideLeft === false){
                slideLeft = true;
                $('nav').animate({
                    left: '0vw'
                });
                $('nav').css('overflow', 'hidden');
                menu.slideToggle();
            } else {
                slideLeft = false;
                $('nav').animate({
                    left: '100vw'
                });
                menu.slideToggle();
            }
        });



        $(window).resize(function(){
            var w = $(window).width();
            if(w > 320 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        }); 




}); //closes doc.ready