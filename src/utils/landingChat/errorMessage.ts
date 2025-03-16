export const getRandomErrorMessage = () => {
  const errorMessages = [
    "Oops! Something went wrong. Please try again. 😕",
    "Hmm... I'm having trouble responding. Please try again in a moment. 🛠️",
    "Sorry, I couldn't process that. Check your internet connection or try again. 🔄",
    "My circuits are tangled! Try asking again. 🤖⚡",
    "Something went wrong on my end. Please rephrase or try again. 💡",
    "Whoops! Looks like I lost my train of thought. 🚂💨 Try again?",
    "I hit a snag! Let me untangle this... Try again in a sec. 🕸️🤖",
    "Error detected! But don’t worry, I’m on it. 🚨 Try again soon!",
    "Uh-oh, my AI brain froze for a moment. ❄️ Try refreshing your request! 🔄",
    "Glitch in the matrix! Let’s give it another shot. 🕶️💻",
  ];

  return errorMessages[Math.floor(Math.random() * errorMessages.length)];
};
