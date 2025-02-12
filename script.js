$(document).ready(function () {
  $("nav a").click(function () {
      // Remove active class from all links
      $("nav a").removeClass("active");
      
      // Add active class to the clicked link
      $(this).addClass("active");
  });

$(".hamburger").click(function () {
        $("nav").slideToggle("active");
    });

  $("nav a").click(function(){
    $("nav").slideToggle("active");
  })



let observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
      if (entry.isIntersecting) {
          $(entry.target).addClass("show");
      } else {
          $(entry.target).removeClass("show");
      }
  });
});

$(".education-item, .skill-category").each(function () {
  observer.observe(this);
});


});




