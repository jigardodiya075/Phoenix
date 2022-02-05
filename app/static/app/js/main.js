// // Initiate superfish on nav menu
// $('.nav-menu').superfish({
//     animation: {opacity:'show'},
//     speed: 400
//   });
  
//   // Mobile Navigation
//   if( $('#nav-menu-container').length ) {
//       var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
//       $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
//       $('body').append( $mobile_nav );
//       $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
//       $('body').append( '<div id="mobile-body-overly"></div>' );
//       $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
      
//       $(document).on('click', '.menu-has-children i', function(e){
//           $(this).next().toggleClass('menu-item-active');
//           $(this).nextAll('ul').eq(0).slideToggle();
//           $(this).toggleClass("fa-chevron-up fa-chevron-down");
//       });
      
//       $(document).on('click', '#mobile-nav-toggle', function(e){
//           $('body').toggleClass('mobile-nav-active');
//           $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
//           $('#mobile-body-overly').toggle();
//       });
      
//       $(document).click(function (e) {
//           var container = $("#mobile-nav, #mobile-nav-toggle");
//           if (!container.is(e.target) && container.has(e.target).length === 0) {
//              if ( $('body').hasClass('mobile-nav-active') ) {
//                   $('body').removeClass('mobile-nav-active');
//                   $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
//                   $('#mobile-body-overly').fadeOut();
//               }
//           }
//       });
//   } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
//       $("#mobile-nav, #mobile-nav-toggle").hide();
//   }

  $('#slider3').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
        },
        600: {
            items: 3,
            nav: true,
            autoplay: true,
        },
        1000: {
            items: 3,
            nav: true,
            loop: true,
            autoplay: true,
        }
    }
})
      /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
    //   let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)



    document.addEventListener("DOMContentLoaded", function(){
		
		el_autohide = document.querySelector('.autohide');
		
		// add padding-top to bady (if necessary)
		// navbar_height = document.querySelector('.navmenu').offsetHeight;
		// document.body.style.paddingTop = navbar_height + 'px';

		if(el_autohide){
			
			var last_scroll_top = 0;
			window.addEventListener('scroll', function() {
	       		let scroll_top = window.scrollY;
		       if(scroll_top < last_scroll_top) {
		            el_autohide.classList.remove('scrolled-down');
		            el_autohide.classList.add('scrolled-up');
		        }
		        else {
		            el_autohide.classList.remove('scrolled-up');
		            el_autohide.classList.add('scrolled-down');
		        }
		        last_scroll_top = scroll_top;

			}); 
			// window.addEventListener

		}
		// if
		
	}); 
