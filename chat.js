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
    botMsg.innerHTML = generateBotResponse(msg);  // Cambia textContent por innerHTML
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

  if (input.includes('hola')) 
    return '¡Hola! 😊 ¿En qué puedo ayudarte hoy? Si tienes dudas sobre diseño, cargos, o necesitas información, aquí estoy.';
  
  if (input.includes('ayuda')) 
    return '¡Por supuesto! 💡 Cuéntame en qué necesitas ayuda o si prefieres, puedes contactar a un asesor escribiendo a <a href="mailto:fabricadecontenido@cun.edu.co">fabricadecontenido@cun.edu.co</a>.';
  
  if (input.includes('preguntas')) 
    return 'Estoy aquí para responder todas tus preguntas. Recuerda que también puedes escribirnos a <a href="mailto:fabricadecontenido@cun.edu.co">fabricadecontenido@cun.edu.co</a> si deseas atención personalizada.';
  
  // Mensaje por defecto con sugerencia de contacto
  return '¡Ups! 🤔 No entendí tu mensaje. ¿Podrías reformularlo? O si lo prefieres, contacta a un asesor directamente en <a href="mailto:fabricadecontenido@cun.edu.co">fabricadecontenido@cun.edu.co</a>. ¡Estoy aquí para ayudarte!';
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

  
