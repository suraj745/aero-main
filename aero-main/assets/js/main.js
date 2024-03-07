/*--------------------------
    Project Name: Logisti
    Version: 1.2
    Author: 7oorof
    Devloped by: Ahmed Abdallah (a.abdallah999@gmail.com)
    Relase Date: November 2019
    Last Update: April 2020
---------------------------*/

/*---------------------------
      Table of Contents
    --------------------

    01- Pre Loading
    02- Mobile Menu
    03- Sticky Navbar
    04- Popup Search 
    05- Scroll Top Button
    06- Equal Height Elements
    07- Set Background-img to section 
    08- Add active class to accordions
    09- Load More Items
    10- Add Animation to About Img
    11- Owl Carousel
    12- Popup Video
    13- CounterUp
    14- Projects Filtering and Sorting
     
 ----------------------------*/

$(function () {
  // Global variables
  var $win = $(window);

  /*==========  Pre Loading   ==========*/
  $win.on("load", function () {
    $(".preloader").fadeOut(4000);
    $(".preloader").remove();
  });

  /*==========   Mobile Menu   ==========*/
  var $navToggler = $(".navbar-toggler");
  $navToggler.on("click", function () {
    $(this).toggleClass("actived");
  });
  $navToggler.on("click", function () {
    $(".navbar-collapse").toggleClass("menu-opened");
  });

  /*==========   Sticky Navbar   ==========*/
  $win.on("scroll", function () {
    if ($win.width() >= 992) {
      var $navbar = $(".navbar");
      if ($win.scrollTop() > 80) {
        $navbar.addClass("fixed-navbar-active");
      } else {
        $navbar.removeClass("fixed-navbar-active");
      }
    }
  });

  /*==========  Popup Search   ==========*/
  // Show Module Search
  $(".module__btn-search").on("click", function (e) {
    e.preventDefault();
    $(".module__search-container")
      .toggleClass("active", "inActive")
      .removeClass("inActive");
  });
  // Close Module Search
  $(".close-search").on("click", function () {
    $(".module__search-container").removeClass("active").addClass("inActive");
  });

  /*==========   Scroll Top Button   ==========*/
  var $scrollTopBtn = $("#scrollTopBtn");
  // Show Scroll Top Button
  $win.on("scroll", function () {
    if ($(this).scrollTop() > 700) {
      $scrollTopBtn.addClass("actived");
    } else {
      $scrollTopBtn.removeClass("actived");
    }
  });
  // Animate Body after Clicking on Scroll Top Button
  $scrollTopBtn.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  /*==========   Equal Height Elements   ==========*/
  var maxHeight = 0;
  $(".equal-height").each(function () {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  $(".equal-height").height(maxHeight);

  /*==========   Set Background-img to section   ==========*/
  $(".bg-img").each(function () {
    var imgSrc = $(this).children("img").attr("src");
    $(this)
      .parent()
      .css({
        "background-image": "url(" + imgSrc + ")",
        "background-size": "cover",
        "background-position": "center",
      });
    $(this).parent().addClass("bg-img");
    $(this).remove();
  });

  /*==========   Add active class to accordions   ==========*/
  $(".accordion__item-header").on("click", function () {
    $(this).addClass("opened");
    $(this)
      .parent()
      .siblings()
      .find(".accordion__item-header")
      .removeClass("opened");
  });
  $(".accordion__item-title").on("click", function (e) {
    e.preventDefault();
  });

  /*==========   Load More Items  ==========*/
  function loadMore(loadMoreBtn, loadedItem) {
    $(loadMoreBtn).on("click", function (e) {
      e.preventDefault();
      $(this).fadeOut();
      $(loadedItem).fadeIn();
    });
  }

  loadMore(".loadMoreBlog", ".hidden-blog-item");
  loadMore(".loadMoreServices", ".hidden-service");
  loadMore(".loadMoreProjects", ".project-hidden > .project-item");

  /*==========   Add Animation to About Img ==========*/
  if ($(".about").length > 0) {
    $(window).on("scroll", function () {
      var skillsOffset = $(".about").offset().top - 200,
        skillsHight = $(this).outerHeight(),
        winScrollTop = $(window).scrollTop();
      if (
        winScrollTop > skillsOffset - 1 &&
        winScrollTop < skillsOffset + skillsHight - 1
      ) {
        $(".about__img").addClass("animate-img");
      }
    });
  }

  /*==========   Owl Carousel  ==========*/
  $(".carousel").each(function () {
    $(this).owlCarousel({
      nav: $(this).data("nav"),
      dots: $(this).data("dots"),
      loop: $(this).data("loop"),
      margin: $(this).data("space"),
      center: $(this).data("center"),
      dotsSpeed: $(this).data("speed"),
      autoplay: $(this).data("autoplay"),
      transitionStyle: $(this).data("transition"),
      animateOut: $(this).data("animate-out"),
      animateIn: $(this).data("animate-in"),
      autoplayTimeout: 15000,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: $(this).data("slide-sm"),
        },
        700: {
          items: $(this).data("slide-md"),
        },
        1000: {
          items: $(this).data("slide"),
        },
      },
    });
  });
  // Owl Carousel With Thumbnails
  $(".thumbs-carousel").owlCarousel({
    thumbs: true,
    thumbsPrerendered: true,
    loop: true,
    margin: 0,
    autoplay: $(this).data("autoplay"),
    nav: $(this).data("nav"),
    dots: $(this).data("dots"),
    dotsSpeed: $(this).data("speed"),
    transitionStyle: $(this).data("transition"),
    animateOut: $(this).data("animate-out"),
    animateIn: $(this).data("animate-in"),
    autoplayTimeout: 15000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /*==========  Popup Video  ==========*/
  $(".popup-video").magnificPopup({
    mainClass: "mfp-fade",
    removalDelay: 0,
    preloader: false,
    fixedContentPos: false,
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
      },
      srcAction: "iframe_src",
    },
  });

  /*==========   counterUp  ==========*/
  $(".counter").counterUp({
    delay: 10,
    time: 4000,
  });

  /*==========   Projects Filtering and Sorting  ==========*/
  $("#filtered-items-wrap").mixItUp();
  $(".projects-filter li a").on("click", function (e) {
    e.preventDefault();
  });
});

// navbar loader

function loadNavbar() {
  const header = document.querySelector("#header");

  header.innerHTML = `<nav class="navbar navbar-expand-lg fixed-navbar">
          <div class="container">
            <a class="navbar-brand col-4" href="/">
              <img
                src="/assets/images/logo.jpg"
                class="logo-light col-md-8"
                alt="logo"
              />
              <img
                src="assets/images/logo.jpg"
                class="logo-dark col-md-8"
                alt="logo"
              />
            </a>
            <button class="navbar-toggler" type="button">
              <span class="menu-lines"><span></span></span>
            </button>

            <!-- /.header-top-right -->
            <div class="collapse navbar-collapse" id="mainNavigation">
              <ul class="navbar-nav ml-auto">
                <li class="nav__item ">
                  <a
                    href="/"
                    class=" nav__item-link "
                    >Home</a
                  >
                </li>
                <!-- /.nav-item -->
                <li class="nav__item ">
                  <a href="/know-us-better.html" class="nav__item-link"
                    >Know us better</a
                  >
                </li>
                <!-- /.nav-item -->
                <li class="nav__item ">
                  <a href="/why-choose-us.html" class="nav__item-link"
                    >Why choose us</a
                  >
                </li>
                <!-- /.nav-item -->
                <li class="nav__item">
                  <a href="/work-with-us.html" class="nav__item-link">Work with us</a>
                </li>
                <!-- /.nav-item -->
                <li class="nav__item ">
                  <a href="/contact-us.html" class="nav__item-link"
                    >Contact us</a
                  >
                </li>
              </ul>
              <!-- /.navbar-nav -->
            </div>
          </div>
          <!-- /.container -->
        </nav>`;
}

function loadFooter() {
  const footer = document.querySelector("#footer");

  footer.innerHTML = ` 
  <div class="footer-top">
  <div class="container">
    <div class="row justify-content-around">
      <div
        class="col-sm-12 col-md-12 col-lg-4 footer__widget footer__widget-about"
      >
        <div class="footer__widget-content">
          <img
            src="assets/images/logo.jpg"
            alt="logo"
            class="mb-30 col-8"
          />
        </div>
      </div>
      <!-- /.col-lg-4 -->
      <div
        class="col-6 col-sm-6 col-md-3 col-lg-4 footer__widget footer__widget-nav"
      >
        <h6 class="footer__widget-title text-center">Who We Are</h6>
        <div class="footer__widget-content">
          <nav>
            <ul class="list-unstyled text-center">
              <li><a href="/">Home</a></li>
              <li><a href="/know-us-better.html">Know Us Better</a></li>
              <li><a href="/why-choose-us.html">Why Choose Us</a></li>
              <li><a href="/work-with-us.html">Work With Us</a></li>
              <li><a href="/contact-us.html">Contact Us</a></li>
            </ul>
          </nav>
        </div>
        <!-- /.footer-widget-content -->
      </div>

      <div
        class="col-6 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav"
      >
        <h6 class="footer__widget-title text-center">Social Links</h6>
        <div class="footer__widget-content">
          <nav>
            <ul class="list-unstyled">
              <li class="d-flex justify-content-around">
                <a href="/www.facebook.com"><i class="fa fa-facebook"></i></a>
                <a href="/www.twitter.com"><i class="fa fa-twitter"></i></a>
                <a href="/www.instagram.com"><i class="fa fa-instagram"></i></a>
                <a href="/www.linkedin.com"><i class="fa fa-linkedin"></i></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;
}

loadFooter();
