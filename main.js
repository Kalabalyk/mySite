document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Отримання значень полів форми
    const name = event.target.name.value;
    const message = event.target.message.value;

    // Створення нового відгуку
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
    authorImage.src = 'imges/profile.jpg'; // Замість цього можна підставити шлях до зображення користувача, якщо доступно
    authorImage.alt = 'Author Image';

    authorInfo.appendChild(reviewAuthor);
    authorInfo.appendChild(reviewDate);
    reviewFooter.appendChild(authorInfo);
    reviewFooter.appendChild(authorImage);
    
    newReview.appendChild(reviewMessage);
    newReview.appendChild(reviewFooter);
    
    reviewContainer.appendChild(newReview);

    // Очищення полів форми
    event.target.reset();
});
