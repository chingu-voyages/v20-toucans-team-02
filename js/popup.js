//some code to create a modal layer
const helpBtn = document.querySelector(".helpBtn");
const modalBg = document.querySelector(".modalBg");

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
modalBg.addEventListener('click', closeHelp);