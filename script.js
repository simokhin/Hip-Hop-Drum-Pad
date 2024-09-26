window.addEventListener("keydown", (e) => {
    console.log(e)
    const audio = document.querySelector(`audio[id="${e.key}"]`);
    audio.currentTime = 0;
    audio.play();
})

