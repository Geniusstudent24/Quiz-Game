let plyBtn = document.querySelector(".play");
let quiz = document.querySelector(".quiz");
let input = document.querySelectorAll("input");
let netbtn = document.querySelector("#netBtn");
let que = document.querySelector("h3");
let opt = document.querySelectorAll("#option");
let res = document.querySelector(".res");
let result = document.querySelector("#result");

let arr = [
  {
    question: "1. Which device is not input device in below?",
    options: [
      "(A).keyboard",
      "(B).mouse",
      "(C).printer",
      "(D).scanner",
    ],
    answer: "C",
  },
  {
    question: "2. What is full of HTML?",
    options: [
      "(A).Hyper text markup language",
      "(B).Hiper text markup language",
      "(C).Heper transfer Mark language",
      "(D).hiper transform mark language",
    ],
    answer: "A",
  },
  {
    question: "3. which is no os in below?",
    options: [
      "(A).Windows",
      "(B).Linux",
      "(C).Chrome",
      "(D).MacOs",
    ],
    answer: "D",
  },
  {
    question: "4.how many bit in byts?",
    options: [
      "(A).4",
      "(B).8",
      "(C).16",
      "(D).32",
    ],
    answer: "B",
  },
  
  {
    question: "5. Full form of URL",
    options: [
      "(A). Uniform Resource Locator",
      "(B). Unique Resources Lactor",
      "(C). University Response Lactor",
      "(D).Universal Resources Lactor",
    ],
    answer: "A",
  },

  {
    question: "6. Which is not a programming language?",
    options: [
      "(A).c",
      "(B).c++",
      "(C).html",
      "(D).java",
    ],
    answer: "C",
  },
 
  {
    question: "7. Types of css?",
    options: [
      "(A).4",
      "(B).8",
      "(C).2",
      "(D).3",
    ],
    answer: "D",
  }
];

let selectBtn = "";
let score = 0;

plyBtn.addEventListener("click", () => {
  quiz.style.display = "block";
  score = 0;
  plyBtn.style.display = "none";
  
});

function radio() {
  netbtn.style.display = "block";
}

let currQue = 0;

que.textContent = arr[currQue].question;
opt.forEach((option, index) => {
  option.textContent = arr[currQue].options[index];
});



netbtn.addEventListener("click", () => {
  selectBtn = "";
  for(const radio of input) {
    if(radio.checked) {
      selectBtn = radio.value;
      break;
    }
  }
  if(selectBtn === "") {
    console.warn("no select option");
    return;
  }

  input.forEach((input) => {
    input.checked = false; 
  });

  if (selectBtn === arr[currQue].answer) {
    score++;
  }
  
  if (currQue < arr.length - 1) {
    currQue++;
    que.textContent = arr[currQue].question;
    opt.forEach((option, index) => {
      option.textContent = arr[currQue].options[index];
    });
  } else {
    res.style.display = "block";
    netbtn.innerText = "finished";
    result.innerText = "Your Score is : "+ score + " of 7";
  }
});
