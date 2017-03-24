$(document).ready(function(){

	var wh = $(window).height();
	
	$('#journal-slider').height(wh-100);

	$('#journal-slider').bjqs({
		animation: 'slide',
		showcontrols    : true, 
		showmarkers : false,
	});

	setTimeout(function(){
		$('span#choice').trigger('click');
		$('span#xmas').trigger('click');

	}, 500);
    
    $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
    });


	$('body.term-micro-lot.term-74 .product.first').addClass('MICRO');

	$('.no-action-link').on('click touchstart', function(event){
		event.preventDefault();
	});


	$('.resposive-menu-trigger').on('click touchstart', function(){
		$('#mob-nav').slideToggle(300);
	});

	$('.filter-trigger').on('click', function(){
		$('.filter-container').slideToggle(500);
	});	

	$('.filter-container select').change(function(){
		$('.filter-container').slideUp(500);
	});

	$('.mob-navi-trigger').on('click touchstart', function(event){
		event.preventDefault();
		var thisHREF = $(this).attr('href');
		if ($(thisHREF).hasClass('active')) {
			$(thisHREF).removeClass('active').slideUp(500);
		}else{
			$('.mobile-nav-section-container').removeClass('active').slideUp(500, function(){
				setTimeout(function(){
					$(thisHREF).addClass('active').slideDown(500);
				},500)
			})
		};
	});

	$('#extra-info-toggle').on('click', function(event){
		event.preventDefault();
		var thisHREF = $(this).attr('href');
		$(thisHREF).slideToggle(500);
	});

	$('body').on('scroll', function(){
		$('.mobile-nav-section-container').removeClass('active').slideUp(500);

	});

	$(document).on('scrollstart', function() {
	   $('.mobile-nav-section-container').removeClass('active').slideUp(500);

	});

	$('.overlay-trigger').on('click', function(event){
		event.preventDefault();
		$('body').addClass('blur');
		var overlay = '#' + $(this).data('overlay');
		var content = $(overlay).find('.overlay-content');

		if (overlay =='#share-overlay') {
			var shareURL = $(this).data('share');
			var shareIMG = $(this).data('image');
			$('#share-overlay #twitter').attr('href', 'https://twitter.com/home?status='+shareURL)
			$('#share-overlay #facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u='+shareURL)
			$('#share-overlay #pinterest').attr('href', 'http://pinterest.com/pin/create/button/?url='+shareURL+'&media='+shareIMG)
			$('#share-overlay #email').attr('href', 'mailto:?subject=&body='+shareURL);
			$('#share-overlay #share-url').val(shareURL);
		}

		$(overlay).addClass('active').fadeIn(250, function(){
			if (overlay =='#search-overlay') {
				setTimeout(function(){
					$(content).slideDown(500, function(){
						$(content).find('input').focus();
					});
					
				}, 150);
			} else {
				$(content).slideDown(500);
			}

				
		});

		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				if ($('.overlay-bg').is(":visible")) {
				   close_overlay(); 
				}
			}
		});
	});

	$('.close-overlay').on('click', function(){
		close_overlay();
	});

	function close_overlay(){
		var active_overlay = $('.overlay-bg.active');
		var active_overlay_content = $(active_overlay).find('.overlay-content');
		$(active_overlay_content).slideUp(250, function(){
			setTimeout(function(){
				$(active_overlay).fadeOut(200);
				$('body').removeClass('blur');
			}, 150);
		});
	}
		
		$('a.share-link').on('click', function(event){
			event.preventDefault();
			var url = $(this).attr('href');
			var title = 'Share';
			var w = 500;
			var h = 500;
			var x = popupwindow(url, title, w, h);
		})
        
        $('.show-hide').addClass('js');
        $('.show-hide-content').hide();
        $('.show-hide>h3').on('click', function(){
        $(this).next('.show-hide-content').slideToggle('300');
        });

	});

/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
 var disqus_shortname = 'digitalstudent'; // required: replace example with your forum shortname
/* * * DON'T EDIT BELOW THIS LINE * * */
 (function () {
 var s = document.createElement('script'); s.async = true;
 s.type = 'text/javascript';
 (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
 }());