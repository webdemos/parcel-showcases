
import app from './app';

const framework = document.getElementById("tsapp");

app.server();

window.addEventListener('load', () => {

  framework.style.color = '#f3e96f';
  framework.style.fontSize = '2rem';
  framework.style.fontWeight = 'bold';
  framework.innerHTML = 'Hello, TypeScript!';

});

