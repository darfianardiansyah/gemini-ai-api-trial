// ============================================
// Chatbot Frontend - Vanilla JavaScript
// ============================================

// DOM Elements
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// Conversation history (stores all messages)
let conversationHistory = [];

// ============================================
// Event Listeners
// ============================================

form.addEventListener('submit', handleFormSubmit);

// Allow Enter key to submit (but Shift+Enter for new line if needed)
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleFormSubmit(e);
  }
});

// ============================================
// Main Handler
// ============================================

async function handleFormSubmit(e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  try {
    // Add user message to chat and history
    addMessageToChat('user', userMessage);
    conversationHistory.push({ role: 'user', text: userMessage });

    // Clear input
    input.value = '';
    input.focus();

    // Show thinking message with unique ID for replacement
    const thinkingElement = addMessageToChat('bot', 'Thinking...');

    // Send request to backend
    const response = await sendChatRequest(conversationHistory);

    // Check if we got a valid response
    if (response && response.result) {
      const aiMessage = response.result;

      // Add AI message to history
      conversationHistory.push({ role: 'model', text: aiMessage });

      // Replace "Thinking..." with actual response
      thinkingElement.textContent = aiMessage;
    } else {
      // No result in response
      thinkingElement.textContent =
        'Sorry, no response received.';
    }
  } catch (error) {
    console.error('Error:', error);

    // Show error message in chat
    const errorElement = chatBox.lastElementChild;
    if (
      errorElement &&
      errorElement.textContent === 'Thinking...'
    ) {
      errorElement.textContent =
        'Failed to get response from server.';
    } else {
      addMessageToChat('bot', 'Failed to get response from server.');
    }
  }
}

// ============================================
// API Communication
// ============================================

async function sendChatRequest(conversation) {
  const payload = {
    conversation: conversation,
  };

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(
      `Server error: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data;
}

// ============================================
// DOM Manipulation
// ============================================

function addMessageToChat(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = text;

  chatBox.appendChild(messageDiv);

  // Auto-scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  return messageDiv;
}
