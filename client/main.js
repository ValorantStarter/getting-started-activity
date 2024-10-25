import './style.css'
import rocketLogo from '/rocket.png'

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${rocketLogo}" class="logo" alt="Discord" />
    <h1>Hello, World!</h1>
  </div>
  # install project dependencies
npm install

# start frontend
npm run dev

`;
