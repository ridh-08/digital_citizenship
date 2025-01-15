const scenarios = [
    {
      id: 1,
      question: "You witness cyberbullying in a group chat. What do you do?",
      choices: [
        { text: "Ignore it and move on", outcome: "The bullying continues, causing harm to the victim.", next: 2 },
        { text: "Report it to the group admin or a trusted adult", outcome: "The issue is addressed, and the group becomes safer for everyone.", next: 2 },
      ],
    },
    {
      id: 2,
      question: "You use AI to generate artwork for a competition. How do you proceed?",
      choices: [
        { text: "Submit it as your original work", outcome: "The judges disqualify you for violating the rules.", next: 3 },
        { text: "Credit the AI tool in your submission", outcome: "Your honesty is appreciated, though the entry is non-competitive.", next: 3 },
      ],
    },
    {
      id: 3,
      question: "A free app asks for access to your contacts and photos. What do you do?",
      choices: [
        { text: "Grant all permissions", outcome: "Your personal data is sold to third parties without your consent.", next: 4 },
        { text: "Deny unnecessary permissions", outcome: "You protect your privacy and only share what's required.", next: 4 },
      ],
    },
    {
      id: 4,
      question: "Your device offers an eco-friendly mode. What do you do?",
      choices: [
        { text: "Ignore it for better performance", outcome: "You miss an opportunity to reduce your environmental footprint.", next: 5 },
        { text: "Enable it and adjust to slightly slower performance", outcome: "You contribute to a more sustainable tech ecosystem.", next: 5 },
      ],
    },
    {
      id: 5,
      question: "You receive a notification about excessive screen time. How do you respond?",
      choices: [
        { text: "Dismiss it and continue using your device", outcome: "Your screen time continues to negatively affect your health.", next: 6 },
        { text: "Take a break and set limits for the future", outcome: "You feel more refreshed and balanced.", next: 6 },
      ],
    },
    {
      id: 6,
      question: "You’re running out of time to complete an assignment and find an online article that perfectly answers the question. What do you do?",
      choices: [
        { 
          text: "Copy the article and submit it as your own work", 
          outcome: "Your professor discovers the plagiarism, leading to disciplinary action and loss of credibility.", 
          next: 7 
        },
        { 
          text: "Use the article as a reference and properly cite it", 
          outcome: "You complete the assignment ethically and maintain your academic integrity.", 
          next: 7 
        },
      ],
    },
    {
      id: 7,
      text: "As we navigate a world increasingly shaped by AI and social media, our actions and decisions hold more weight than ever. Being a responsible global citizen means upholding ethical values, fostering empathy, and understanding the impact of technology on society. Small choices—like addressing cyberbullying, respecting intellectual property, and balancing screen time—contribute to a healthier, more equitable digital world.",
      next: null,
    },
  ];
  
  const gameContainer = document.getElementById("game-container");
  
  function displayScenario(scenarioId) {
    const scenario = scenarios.find(s => s.id === scenarioId);
    if (!scenario) return;
  
    if (scenario.choices) {
      gameContainer.innerHTML = `
        <div class="scenario">
          <p>${scenario.question}</p>
          ${scenario.choices.map((choice, index) => `
            <button onclick="displayOutcome(${scenarioId}, ${index})">${choice.text}</button>
          `).join('')}
        </div>
      `;
    } else {
      gameContainer.innerHTML = `
        <div class="scenario">
          <p>${scenario.text}</p>
          <button onclick="restartGame()">Restart</button>
        </div>
      `;
    }
  }
  
  function displayOutcome(scenarioId, choiceIndex) {
    const scenario = scenarios.find(s => s.id === scenarioId);
    const choice = scenario.choices[choiceIndex];
  
    gameContainer.innerHTML = `
      <div class="outcome">
        <p>${choice.outcome}</p>
        ${choice.next ? `<button onclick="displayScenario(${choice.next})">Next Scenario</button>` : '<button onclick="restartGame()">Restart</button>'}
      </div>
    `;
  }
  
  function restartGame() {
    displayScenario(1);
  }
  
  // Start the game
  displayScenario(1);
  