window.addEventListener("keyup", function (e) {
    console.log(e.keyCode);

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);

    if (!audio) {
        return;

    }
    else {
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
    }
    setTimeout(function () {
        key.classList.remove("playing");
    }, 500);


});