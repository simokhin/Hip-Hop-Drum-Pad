window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[id="${e.key}"]`);
    const buttons = document.querySelector(`button[id="${e.key}"]`)
    audio.currentTime = 0;
    audio.play();
    buttons.classList.add("playing");
})  

window.addEventListener("keyup", (e) => {
    const buttons = document.querySelector(`button[id="${e.key}"]`)
    buttons.classList.remove("playing");
})
