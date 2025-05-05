function sendMessage() {
  let input = document.getElementById("messageInput");
  let message = input.value.trim();
  if (message === "") return;

  let chatBox = document.getElementById("chatBox");
  let msgElement = document.createElement("div");
  msgElement.classList.add("message", "sent");
  msgElement.textContent = message;
  chatBox.appendChild(msgElement);
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";
}
