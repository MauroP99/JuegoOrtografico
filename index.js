const sentences = [
    { sentence: "Espero que _____ un buen día.", options: ["haya", "halla", "allá"], answer: "haya" },
    { sentence: "No puedo creer que _____ cometido ese error.", options: ["haya", "halla", "allá"], answer: "haya" },
    { sentence: "No _____ ningún problema en el sistema.", options: ["haya", "halla", "allá"], answer: "hay" },
    { sentence: "Me gustaría _____ ido al cine contigo.", options: ["haya", "halla", "allá"], answer: "haber" },
    { sentence: "¿_____ alguien en la puerta?", options: ["haya", "halla", "allá"], answer: "hay" }
  ];
  
  let currentSentenceIndex = 0;
  let correctAnswers = 0;
  
  const sentenceEl = document.getElementById("sentence");
  const option1El = document.getElementById("option1");
  const option2El = document.getElementById("option2");
  const option3El = document.getElementById("option3");
  
  function startGame() {
    currentSentenceIndex = 0;
    correctAnswers = 0;
    showSentence();
  }
  
  function showSentence() {
    const sentence = sentences[currentSentenceIndex];
    sentenceEl.innerText = sentence.sentence;
    option1El.innerText = sentence.options[0];
    option2El.innerText = sentence.options[1];
    option3El.innerText = sentence.options[2];
  }
  
  function checkAnswer(answer) {
    const sentence = sentences[currentSentenceIndex];
    if (answer === sentence.answer) {
      correctAnswers++;
    }
    currentSentenceIndex++;
    if (currentSentenceIndex >= sentences.length) {
      endGame();
    } else {
      showSentence();
    }
  }
  
  function endGame() {
    alert(`Juego terminado. Obtuviste ${correctAnswers} respuestas correctas de ${sentences.length} oraciones.`);
    startGame();
  }
  
  option1
  
