// Make Website On Top after Loading
window.addEventListener("load", () => {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});
// Toggle Active class
var portfolioLinks = document.querySelectorAll(".port-list ul li ");
var links = document.querySelectorAll(".nav-link");
//On Scroll Set Active
var currentoffset = [];
function setOffset() {
  setTimeout(function () {
    for (let i = 0; i < links.length; i++) {
      let temp = $(links[i]).attr("href");
      if ($(temp).length) {
        currentoffset.push($(temp).offset().top);
      }
    }
  }, 1000);
}
setOffset();
// Portfolio Section
$(window).scroll(function () {
  for (var i = 0; i < currentoffset.length; i++) {
    var x = $(window).scrollTop() > currentoffset[i] == true ? true : null;
    if (x !== null) {
      links.forEach((e) => {
        e.classList.remove("active");
      });
      links[i].classList.add("active");
    }
  }
});
for (let i = 0; i < portfolioLinks.length; i++) {
  portfolioLinks[i].addEventListener("click", function () {
    portfolioLinks.forEach((e) => {
      e.classList.remove("active");
    });
    portfolioLinks[i].classList.add("active");
    let filterName = portfolioLinks[i].getAttribute("data-name");
    filteredImage.forEach((image) => {
      let filterImage = image.getAttribute("data-name");
      if (filterImage == filterName || filterName == "all") {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
}
// Filter Portfolio
var filteredImage = document.querySelectorAll(".portfolio .col-md-4");

// change navbar background on scrollBehavior
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-black");
  } else {
    navbar.classList.remove("bg-black");
  }
});
// Start Owl Carosal
$(document).ready(function () {
  $(".landmarks .owl-carousel").owlCarousel({
    margin: 15,
    loop: true,
    autoplay: true,
    dots: false,
    slideTransition: "linear",
    autoplayTimeout: 4500,
    autoplatHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 2,
      },
      500: {
        items: 3,
      },
      600: {
        items: 4,
      },
      800: {
        items: 6,
      },
    },
  });
});
$(document).ready(function () {
  $(".prices .owl-carousel , .blog .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    margin: 25,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1020: {
        items: 3,
      },
    },
  });
});
$(document).ready(function () {
  $(".testimonials .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 4500,
    dots: true,
    loop: true,
    nav: false,
    items: 1,
    margin: 30,
  });
});

// Navbar Button
$(".navbar .navbar-toggler").click(function () {
  var expandOrNot =
    $("button[class='navbar-toggler']").attr("aria-expanded") === "true"
      ? true
      : false;
  if (expandOrNot == true) {
    $(".nav-toggler-icon span:nth-of-type(3)").css({
      width: "25px",
      transition: "width 0.3s",
    });
  } else {
    $(".nav-toggler-icon span:nth-of-type(3)").css({
      width: "calc(25px / 2)",
    });
  }
});
// Back To Top Btn
$(window).scroll(function () {
  if ($(window).scrollTop() > 150) {
    $(".backTotop").css({
      opacity: "1",
      transition: " 0.3s",
    });
  } else {
    $(".backTotop").css({
      opacity: "0",
      transition: " 0.3s",
    });
  }
});
$(".backTotop").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 100);
});
// Go To Section
$(".nav-link").click(function () {
  let currentLink = $(this).attr("href");
  let currentOffset = $(currentLink).offset().top;
  $("body,html").animate({ scrollTop: currentOffset }, 200);
});
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    links.forEach((e) => {
      e.classList.remove("active");
    });
    links[i].classList.add("active");
  });
}
// Numbers section
let numbers = document.querySelectorAll(".numbers .number");
window.addEventListener("scroll", function () {
  if ($(window).scrollTop() > $(".numbers").offset().top) {
    // let interval = 5000;
    numbers.forEach((number) => {
      let startValue = +number.getAttribute("data-start");
      console.log(startValue);
      let endValue = +number.getAttribute("data-number");
      // let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        number.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      });
    });
  }
});
