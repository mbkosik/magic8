
const magicBall = document.querySelector(".magic-ball__image");
const questionInput = document.querySelector(".question");
const answerSection = document.querySelector(".answer");

const answers = ["Tak", "Nie", "Nie wiem", "Zdecydowanie tak", "Zdecydowanie nie"];

magicBall.addEventListener("click", () => {
    magicBall.classList.add("active");
    setTimeout(function() { 
        magicBall.classList.remove("active");
        answerSection.classList.remove("green");
        getAnswer();
    }, 2000)
})

const getAnswer = () => {
    if (questionInput.value === "") {
        displayError("Proszę zadać pytanie"); 
    } else if (questionInput.value.slice(-1) !== "?") {
        displayError("A gdzie znak zapytania?"); 
    } else {
        const answer = answers[Math.floor(Math.random()*answers.length)];
        answerSection.innerHTML = `<span class="bold">Odpowiedź: </span> ${answer}`; 
    }
    questionInput.value = ""
}

const displayError = (error) => {
    answerSection.classList.add("green");
    answerSection.textContent = error; 
}

