window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[id="${e.key}"]`);
    if (!audio) return;

    const buttons = document.querySelector(`button[id="${e.key}"]`)
    audio.currentTime = 0;
    audio.play();
    buttons.classList.add("playing");
})  

window.addEventListener("keyup", (e) => {
    const buttons = document.querySelector(`button[id="${e.key}"]`)
    buttons.classList.remove("playing");
})

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const audio = document.querySelector(`audio[id="${button.id}"]`);
        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
        button.classList.add("playing");
        setTimeout(() => {
            button.classList.remove("playing");
        }, 300);
    })
    button.addEventListener("touch", (e) => {
        const audio = document.querySelector(`audio[id="${button.id}"]`);
        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
        button.classList.add("playing");
        setTimeout(() => {
            button.classList.remove("playing");
        }, 300);
    })
})
