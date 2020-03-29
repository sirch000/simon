const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => playNote(button));

});

function playNote(button) {
    const audioElement = document.getElementById(button.dataset.note);
    audioElement.play();
}
