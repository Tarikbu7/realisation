
let questions = [
    { code: "C1", question: "biggest continent in the world?", answer: "asia" },
    { code: "C2", question: "How many legs does a spider have?", answer: "8" },
    { code: "C3", question: "who is the top scorer of all time ", answer: "cr7" },
    { code: "C4", question: "What is the capital of France", answer: "paris" },
    { code: "C5", question: "How many world wars", answer:"2"},
    { code: "C6", question: "fastest car ever", answer:"bugatti",                             }
                                                             
    
  ];
  
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let extremeTime = 4 * 1000;   
  for (let i = 0; i < questions.length; i++) {
    console.log(`Question ${i + 1}/${questions.length}: ${questions[i].question}`);
    
    let startTime = Date.now(); 
    let userAnswer = prompt(`${questions[i].code}: ${questions[i].question} (4s to answer)`);
    let elapsed = Date.now() - startTime;
  
    if (!userAnswer) userAnswer = ""; 
  
    userAnswer = userAnswer.trim().toLowerCase();
  
    if (elapsed > extremeTime) {
      console.log(`${questions[i].code} TIME OUT ❌ (took ${Math.floor(elapsed/1000)}s)`);
      wrongAnswers++;
    } else if (userAnswer === questions[i].answer.toLowerCase()) {
      console.log(`${questions[i].code} ANSWER IS ✔️ (took ${Math.floor(elapsed/1000)}s)`);
      correctAnswers++;
    } else {
      console.log(`${questions[i].code} ANSWER IS ❌ (took ${Math.floor(elapsed/1000)}s)`);
      wrongAnswers++;
    }
  }
  
  console.log("✅ Correct answers: " + correctAnswers);
  console.log("❌ Wrong answers: " + wrongAnswers);
  console.log("🎯 Final Score: " + correctAnswers + "/" + questions.length);
  