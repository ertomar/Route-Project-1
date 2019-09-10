let navOffset = $(".navbar-section #nav-bar").offset().top;
$(window).scroll(function () {
  let scrolledTop = $(window).scrollTop();
  if (scrolledTop > navOffset) {
    $(".navbar-section #nav-bar").addClass("fixed-top");
  } else {
    $(".navbar-section #nav-bar").removeClass("fixed-top");
  }
});

if (document.getElementById("giftBody") != null) {
  let totalRatingsCount = $("#RatingCount").html();
  totalRatingsCount = totalRatingsCount.replace("(", "");
  totalRatingsCount = totalRatingsCount.replace(")", "");
  totalRatingsCount = parseInt(totalRatingsCount);
  $(".o-rating-count").each(function (index) {
    let ratingCount = parseInt($(this).text());
    console.log($(".o-progress-bar").eq(index).width(`${100 * ratingCount / totalRatingsCount}%`));
  });

  //.o-reviews.container.o-reviews-ratings-description.o-review-rating.o-progress
}
