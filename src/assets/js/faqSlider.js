export function cards() {
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const cards = document.querySelectorAll(".faq__card");
    const numberOfCards = cards.length;
    var cardNumber = 0;

    //image card next button
    nextBtn.addEventListener("click", () => {
    cards.forEach((faq__card) => {
        faq__card.classList.remove("active");
    });

    cardNumber++;

    if(cardNumber > (numberOfCards - 1)){
        cardNumber = 0;
    }

    cards[cardNumber].classList.add("active");
    });

    //image card previous button
    prevBtn.addEventListener("click", () => {
    cards.forEach((faq__card) => {
        faq__card.classList.remove("active");
    });

    cardNumber--;

    if(cardNumber < 0){
        cardNumber = numberOfCards - 1;
    }

    cards[cardNumber].classList.add("active");
    });
}