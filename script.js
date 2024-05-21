// console.log("Quiz");

const mcqs = [
  {
    question: "What is the capital of France?",
    options: {
      1: "London",
      2: "Paris",
      3: "Berlin",
      4: "Rome",
    },
    answer: "2", // Correct answer
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: {
      1: "Mars",
      2: "Venus",
      3: "Jupiter",
      4: "Saturn",
    },
    answer: "1", // Correct answer
  },
  {
    question: "What is the largest mammal?",
    options: {
      1: "Elephant",
      2: "Blue Whale",
      3: "Giraffe",
      4: "Hippopotamus",
    },
    answer: "2", // Correct answer
  },
  {
    question: "Who developed the theory of relativity?",
    options: {
      1: "Isaac Newton",
      2: "Albert Einstein",
      3: "Stephen Hawking",
      4: "Galileo Galilei",
    },
    answer: "2", // Correct answer
  },
  {
    question: "What is the chemical symbol for water?",
    options: {
      1: "H",
      2: "O",
      3: "W",
      4: "H2O",
    },
    answer: "4", // Correct answer
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: {
      1: "China",
      2: "Japan",
      3: "India",
      4: "South Korea",
    },
    answer: "2", // Correct answer
  },
  {
    question: "Who painted the Mona Lisa?",
    options: {
      1: "Vincent van Gogh",
      2: "Leonardo da Vinci",
      3: "Pablo Picasso",
      4: "Michelangelo",
    },
    answer: "2", // Correct answer
  },
  {
    question: "What is the largest organ in the human body?",
    options: {
      1: "Liver",
      2: "Heart",
      3: "Lung",
      4: "Skin",
    },
    answer: "4", // Correct answer
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: {
      1: "Nitrogen",
      2: "Oxygen",
      3: "Carbon Dioxide",
      4: "Argon",
    },
    answer: "1", // Correct answer
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: {
      1: "Harper Lee",
      2: "J.K. Rowling",
      3: "George Orwell",
      4: "Mark Twain",
    },
    answer: "1", // Correct answer
  },
];




const con = document.querySelector("#con");
const que = document.querySelector("h2");
const span = document.querySelectorAll("span");

console.log(span[1]);

let i = 0;
const oAns = mcqs[i].answer;

const start = () => {
  // console.log(ans);
  if (i == mcqs.length) {
    console.log("Over");
    // alert("Quesrtion Over");
    document.getElementById('modal').style.display = 'block';
    document.querySelector('#score').innerHTML = `${scr}/10`

  }

  que_ind = i;
  que.innerText = mcqs[que_ind].question;
  let ans = mcqs[que_ind].options;

  myHtml = " ";
  for (let i = 1; i < 5; i++) {
    // console.log(ans[i]);

    myHtml += `<span> 
        <input type="radio" name="o" id="" value="${i}">
        <label for="" >${ans[i]}</label>
        </span>`;

    con.innerHTML = myHtml;
  }
  console.log(i, "Question");
  i++;
};

start();

scr = 0;

const next = () => {
  const radio = document.querySelectorAll("input");

  falseCount = 0;

  radio.forEach((e) => {
    console.log(e.checked);
    if (!e.checked) {
      falseCount++;
    }
    console.log(falseCount);
  });

  if (falseCount == 4) {
        alert("Choose One answer");
  } else {
        start();

    let a = radio.forEach((e) => {
      if (e.checked) {
        if (e.value == oAns) {
          scr++;
          start();
        }
      } 
    });

    console.log(scr);
  }
};




// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    location.reload();
}
// console.log(mcqs[0].options);
