document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const photo = event.target.photo.files[0];
    
    const reviewContainer = document.getElementById('reviews-container');
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    
    const reviewMessage = document.createElement('p');
    reviewMessage.textContent = message;
    
    const reviewFooter = document.createElement('div');
    reviewFooter.classList.add('review-footer');
    
    const authorInfo = document.createElement('div');
    authorInfo.classList.add('author-info');
    
    const reviewAuthor = document.createElement('h4');
    reviewAuthor.textContent = name;
    
    const reviewDate = document.createElement('p');
    const currentDate = new Date().toLocaleDateString();
    reviewDate.textContent = currentDate;
    
    const authorImage = document.createElement('img');
    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            authorImage.src = e.target.result;
        };
        reader.readAsDataURL(photo);
    } else {
        authorImage.src = 'imges/profile.jpg'; // Замените на путь к изображению по умолчанию
    }
    authorImage.alt = 'Author Image';

    authorInfo.appendChild(reviewAuthor);
    authorInfo.appendChild(reviewDate);
    reviewFooter.appendChild(authorInfo);
    reviewFooter.appendChild(authorImage);
    
    newReview.appendChild(reviewMessage);
    newReview.appendChild(reviewFooter);
    
    reviewContainer.appendChild(newReview);

    event.target.reset();
});



// Механизм прокрутки 
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const reviews = document.querySelectorAll('.review');
    const dots = document.querySelectorAll('.dot');
    
    if (n > reviews.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = reviews.length }
    
    reviews.forEach((review, index) => {
        review.style.display = 'none';
        if (index >= (slideIndex - 1) * 3 && index < slideIndex * 3) {
            review.style.display = 'block';
        }
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[slideIndex - 1].classList.add('active');
}
