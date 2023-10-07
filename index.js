document.querySelectorAll('.drum').forEach(function(button) {
    button.addEventListener('click', function() {

        playAudio(button.innerHTML);
        animationKey(button.innerHTML);
        
    });
});

document.addEventListener('keypress', function(event) {
    playAudio(event.key);
    animationKey(event.key);
});

function playAudio(key) {
    switch(key) {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            let kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case 'l':
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        
    }
}

function animationKey(c) {
    let keyPressed = document.querySelector(`.${c}`);

    keyPressed.classList.add('pressed');

    setTimeout(function() {
        keyPressed.classList.remove('pressed');
    }, 100);

}