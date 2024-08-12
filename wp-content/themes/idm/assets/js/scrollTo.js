jQuery(function () {
  var $ = jQuery;

  $("#nav #a_home").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      500
    );
  });

  $("#nav #a_about").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      500
    );
  });

  $("#nav #a_services").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("#services").offset().top,
      },
      500
    );
  });

  $("#nav #a_facilitators").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("#facilitators").offset().top,
      },
      500
    );
  });

  $("#nav #a_contact").click(function (e) {
    e.preventDefault();
    //window.location.href = "/";
    $("html,body").animate(
      {
        scrollTop: $("#contact").offset().top,
      },
      500
    );
  });
});
