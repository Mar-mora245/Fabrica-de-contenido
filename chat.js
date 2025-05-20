// Función para enviar mensajes
function sendMessage(message = null) {
    const input = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');
    const msg = message || input.value.trim();
  
    if (msg === '') return;
  
    // Mostrar mensaje del usuario
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.textContent = msg;
    chatBody.appendChild(userMsg);
  
    // Mostrar respuesta del bot
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-message';
    botMsg.textContent = generateBotResponse(msg);
    chatBody.appendChild(botMsg);
  
    if (!message) input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  // Botones rápidos
  function quickMessage(text) {
    sendMessage(text);
  }
  
  // Generar respuesta automática del bot
  function generateBotResponse(userInput) {
    const input = userInput.toLowerCase();
    if (input.includes('hola')) return '¡Hola! ¿En qué puedo ayudarte?';
    if (input.includes('ayuda')) return 'Claro, dime en qué necesitas ayuda.';
    if (input.includes('preguntas')) return 'Estoy aquí para responder todas tus preguntas.';
    return 'No entendí tu mensaje. ¿Podrías reformularlo?';
  }
  
  // Esperar a que el DOM cargue
  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('chatToggle');
    const container = document.getElementById('chatContainer');
    const closeBtn = document.getElementById('closeChat');
  
    // Mostrar chat al hacer clic en el ícono
    toggle.addEventListener('click', () => {
      container.style.display = 'flex';
      toggle.style.display = 'none';
    });
  
    // Ocultar chat al hacer clic en la "x"
    closeBtn.addEventListener('click', () => {
      container.style.display = 'none';
      toggle.style.display = 'block';
    });
  });
  