function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();
    
    if (message === "") return;

    let chatBox = document.getElementById("chat-box");

    // Append user message
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerText = message;
    chatBox.appendChild(userMessage);

    // Auto-reply from bot
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot");
        botMessage.innerText = "Thanks for your message!";
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
