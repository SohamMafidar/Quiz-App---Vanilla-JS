//vars
const quizData = [
    {
        question: "Which planet do we live in?",
        optionA: "Earth",
        optionB: "Venus",
        optionC: "Saturn",
        optionD: "Moon",
        answer: "Earth",
    },
    {
        question: "Which planet is closest to Sun?",
        optionA: "Earth",
        optionB: "Venus",
        optionC: "Saturn",
        optionD: "Mercury",
        answer: "Mercury",
    },
    {
        question: "Which animal has yellowish body with black stripes?",
        optionA: "Tiger",
        optionB: "Lion",
        optionC: "Zebra",
        optionD: "Deer",
        answer: "Tiger",
    },
    {
        question: "An adult has how many teeths?",
        optionA: "33",
        optionB: "34",
        optionC: "32",
        optionD: "29",
        answer: "32",
    },
];

const textContainer = document.querySelector(".text-container");
const submitBtn = document.querySelector("button");
let cnt = 0;
let score = 0;

//funcs
const displayQuestion = () => {
    let op1 = document.getElementById("1").nextElementSibling;
    let op2 = document.getElementById("2").nextElementSibling;
    let op3 = document.getElementById("3").nextElementSibling;
    let op4 = document.getElementById("4").nextElementSibling;

    op1.textContent = quizData[cnt].optionA;
    op2.textContent = quizData[cnt].optionB;
    op3.textContent = quizData[cnt].optionC;
    op4.textContent = quizData[cnt].optionD;
    textContainer.firstElementChild.textContent = quizData[cnt].question;
};

displayQuestion();

function renderNextPage(event) {
    let checkboxs = document.querySelectorAll(".chk:checked");
    let ticked = 0;
    checkboxs.forEach((item) => {
        ticked += 1;
        if (ticked > 1) {
            alert("Choose only 1");
            return false;
        } else {
            if (item.nextElementSibling.textContent === quizData[cnt].answer) {
                // == because item.id is string
                score += 1;
            }
        }
        // clearing the input field
        item.checked = false;
    });

    cnt += 1;
    if (cnt > 3) {
        alert(`Game over !! Your score is ${score}`);
        return false;
    } else {
        displayQuestion();
    }
}

//eventlisteners
submitBtn.addEventListener("click", renderNextPage);
