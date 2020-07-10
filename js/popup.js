//some code to create a modal layer
const helpBtn = document.querySelector(".helpBtn");
const modalBg = document.querySelector(".modalBg");
const closeBtn = document.querySelector(".closeBtn");

modalBg.style.display = "none";

const openHelp = () => {
    modalBg.style.display = "block";
    helpBtn.style.display = "none";
};

const closeHelp = () => {
    modalBg.style.display = "none";
    helpBtn.style.display = "block";
}

helpBtn.addEventListener('click', openHelp);
closeBtn.addEventListener('click', closeHelp);
modalBg.addEventListener('click', closeHelp);