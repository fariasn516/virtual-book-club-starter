document.addEventListener("DOMContentLoaded", () => {
    loadReviews();
});

function loadReviews() {
    console.log("loadreviews called");
    revoews.forEach((review) => {
        console.log(review);
    });
}

function createReviewElement() {
    console.log("createReviewElement")
    const div = document.createElement('div');
    div.className = 'review-item';
    div.innerHTML = `
    <h3>${review.title}</h3>
    <p>${review.review}</p>
    `
}

function handleReviewSUbmit() {

}