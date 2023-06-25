import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function party() {
    for (let i = 0; i < 3; i++) {
        confetti();
    }
}

// document.getElementById('confetti').addEventListener('click', party);

const birthdayCard = document.getElementById('myDiv');

birthdayCard.addEventListener("click", function() {
    birthdayCard.classList.add("clicked");
    party();
});

document.getElementById('confetti').addEventListener('click', function() {
    party();
});

const colorCard = document.getElementById()