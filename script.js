function sendMessage() {
  var userInput = document.getElementById("user-input");
  var chatLog = document.getElementById("chat-log");

  var userMessage = userInput.value;

  var userDiv = document.createElement("div");
  userDiv.innerHTML = "<strong>You:</strong> " + userMessage;

  chatLog.appendChild(userDiv);

  // Send user message to your backend API
  fetch("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", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: userMessage }),
  })
    .then((response) => response.json())
    .then((data) => {
      var botMessage = data.message;

      var botDiv = document.createElement("div");
      botDiv.innerHTML = "<strong>Bot:</strong> " + botMessage;

      chatLog.appendChild(botDiv);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  userInput.value = "";
}
