let rating;
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thankyou-card");
const ratingContainer = document.querySelector(".rating-card__points");
const ratings = document.querySelectorAll(".rating-card__point");
const submitBtn = document.querySelector(".rating-card__btn");
const selectedPoints = document.querySelector(".thankyou-card__points--num");

ratingContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("rating-card__point")) {
    // remove class from all other ratings when user clicks on a rating
    ratings.forEach((rating) => rating.classList.remove("active"));
    // remove class if user clicks on same rating twice
    if (rating === event.target.dataset.rating) {
      event.target.classList.remove("active");
      rating = 0;
    } // add class whenever user clicks on a rating
    else {
      event.target.classList.add("active");
      rating = event.target.dataset.rating;
    }
  }
});

submitBtn.addEventListener("click", function (event) {
  // change cards when user submits
  if (rating) {
    ratingCard.classList.add("hide");
    thankYouCard.style.display = "flex";
    selectedPoints.textContent = rating;
  } // make sure user adds a rating before changing cards
  else {
    alert("Please choose a rating before submitting.");
  }
});
