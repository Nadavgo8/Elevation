import promptSync from "prompt-sync";
const prompt = promptSync();

const quiz = [
  { question: "What is your name? ", answer: "Nadav" },
  { question: "What is your age?", answer: "26" },
  { question: "Who's the GOAT? ", answer: "Messi" },
];
let score = 0;
for (const { question, answer } of quiz) {
  const userAnswer = prompt(question);
  if (userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
    console.log("Correct!");
    score++;
  } else {
    console.log(`Wrong! The correct answer was: ${answer}`);
  }
}

console.log(`\nYour final score is: ${score}/${quiz.length}`);
