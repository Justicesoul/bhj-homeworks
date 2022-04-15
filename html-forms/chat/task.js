const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');

const getCurrentTime = () => {
  const date = new Date();
  const hh = String(date.getHours());
  const mi = String(date.getMinutes());
  const hours = hh < 10 ? `0${hh}` : `${hh}`;
  const minutes = mi < 10 ? `0${mi}` : `${mi}`;
  return `${hours}:${minutes}`;
};

const getAnswers = () => {
  const answers = [
    'Напиши через 10 лет',
    'Днём деньги, вечером стулья',
    'Да ты достал!!!',
    'Сначала заплати, потом поговорим',
    'Где беспредел!?!',
    'Нам зарплату не платят, а ты тут достаёшь своей ерундой',
    'Отвали, я устал',
    'Чё надо!?',
  ];

  return answers[Math.floor(Math.random() * answers.length)];
};

const scrollToBottom = () => {
  messages.lastElementChild.scrollIntoView();
};

const addUserMessage = () => {
  if (input.value.trim()) {
    messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${getCurrentTime()}</div>
          <div class="message__text">${input.value}</div>
        </div>
      `;
    input.value = '';
  }
  scrollToBottom();
};

const addAnswer = () => {
  messages.innerHTML += `
        <div class="message">
          <div class="message__time">${getCurrentTime()}</div>
          <div class="message__text">${getAnswers()}</div>
        </div>
      `;
  scrollToBottom();
};

input.addEventListener('change', () => {
  addUserMessage();
  setTimeout(() => addAnswer(), 1000);
});

chat.addEventListener('click', () => {
  chat.classList.add('chat-widget_active');
});
