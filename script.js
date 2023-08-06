function closeMenu() {
  document.querySelector('.mobile-nav-menu').style.display = 'none';
  document.body.style.overflow = 'scroll';
}

closeMenu();

const union = document.querySelector('#union');
union.addEventListener('click', () => {
  document.querySelector('.mobile-nav-menu').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

const projects = [
  {
    name: 'Fashion Week',
    description: "A fashion week event is a honored gathering showcasing the latest fashion collections, trends, and industry innovations",
    featuredImage: './images/fashion(1).png',
    technologies: ['html', 'css', 'javascript'],
    liveVersion: 'https://dianabeki.github.io/Fashion-week',
    sourceLink: 'https://github.com/DianaBeki/Fashion-week',
  },
  {
    name: 'Math Magicians',
    description: "Math Magicians is a single Page Calculator application developed using React. Calculator does simple arithmetic operations involving Addition, Subtraction, Division and Multiplication . The APP also fetches data from the external API and displays quotes on the page. Additionally the App contains a nav bar for Home, Calculator and quotes pages",
    featuredImage: './images/mathmagician.png',
    technologies: ['html5', 'css3', 'reactjs', 'jest', 'sass'],
    liveVersion: 'https://mathmagicians-4bmj.onrender.com/',
    sourceLink: 'https://github.com/DianaBeki/math-magicians',
  },
  {
    name: 'ToDoList',
    description: "A simple To-Do List built to keep track of tasks that need to be done",
    featuredImage: './images/todo.png',
    technologies: ['html', 'css', 'javascript','webpack'],
    liveVersion: 'https://dianabeki.github.io/To-Do-list/dist/',
    sourceLink: 'https://github.com/DianaBeki/To-Do-list',
  },
  {
    name: 'Space Travellers Hub',
    description: "A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. It is built with real live data from the SpaceX API.",
    featuredImage: './images/spacetravel.png',
    technologies: ['reactjs', 'css', 'webpack', 'redux', 'jest', 'ES6 modules'],
    liveVersion: 'https://space-travelers-three.vercel.app/',
    sourceLink: 'https://github.com/DianaBeki/space-travelers-hub',
  },
  {
    name: 'theRestaraunt',
    description: "This is a website that displays the menu items of a resturant that entails pictures, description, with a like and comment button. The website allows users to like multiple items and also leave a comment on items",
    featuredImage: './images/restaraunt.png',
    technologies: ['javascript', 'css3', 'webpack', 'html5', 'jest'],
    liveVersion: 'https://space-travelers-three.vercel.app/',
    sourceLink: 'https://github.com/DianaBeki/theResturant',
  },
];

const recentWorksSection = document.querySelector('.card-container');

for (let i = 0; i < projects.length; i += 1) {
  const workSection = document.createElement('div');

  if (i % 2 === 0) {
    workSection.classList.add('work-section');
  } else {
    workSection.classList.add('work-section', 'reverse');
  }

  const cards = document.createElement('img');
  cards.classList.add('cards');
  cards.src = projects[i].featuredImage;

  const card1 = document.createElement('div');
  card1.classList.add('card-1');

  const heading2 = document.createElement('h2');
  heading2.classList.add('heading-2');
  heading2.innerHTML = projects[i].name;

  const specify = document.createElement('div');
  specify.classList.add('specify');

  const canopy = document.createElement('p');
  canopy.classList.add('card-text-1');
  canopy.innerHTML = 'Babel';

  const dot = document.createElement('img');
  dot.src = './images/dot.png';
  dot.alt = 'dot';

  const backEndDev = document.createElement('p');
  backEndDev.classList.add('card-text');
  backEndDev.innerHTML = 'Front End Dev';

  const dot2 = document.createElement('img');
  dot2.src = './images/dot.png';
  dot2.alt = 'dot';

  const t2023 = document.createElement('p');
  t2023.classList.add('card-text');
  t2023.innerHTML = '2023';

  specify.appendChild(canopy);
  specify.appendChild(dot);
  specify.appendChild(backEndDev);
  specify.appendChild(dot2);
  specify.appendChild(t2023);

  card1.appendChild(specify);
  card1.appendChild(heading2);

  workSection.appendChild(cards);
  workSection.appendChild(card1);

  const p = document.createElement('p');
  p.innerHTML = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
  card1.appendChild(p);

  const languages = document.createElement('ul');

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    const newLi = document.createElement('li');
    newLi.classList.add('lang');
    newLi.innerHTML = projects[i].technologies[j];
    languages.appendChild(newLi);
  }

  card1.appendChild(languages);

  const seeBtn = document.createElement('button');
  seeBtn.classList.add('btn', 'see-btn');
  seeBtn.innerHTML = 'See Project';

  seeBtn.addEventListener('click', () => {
    document.querySelector('.modal-box').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal-box').innerHTML = `
    <div class="modal-content">
    <div class="modal-project-title-and-close">
      <h3 class="modal-project-title">${projects[i].name}</h3>
      <img src="images/close-modal.png" alt="close modal button" class="close-modal-btn" onclick="closeModal()">
    </div>
    <ul class="modal-project-details">
      <li>CANOPY</li>
      <li><img src="images/dot.png" alt="dot icon"></li>
      <li>Back End Dev</li>
      <li><img src="images/dot.png" alt="dot icon"></li>
      <li>2023</li>
    </ul>
    <img src=${projects[i].featuredImage} alt="project snapshot" class="modal-project-snapshot">
    
    <div class="p-and-btns-box">
      <p class="modal-primary-text">${projects[i].description}</p>
      <div class="modal-skills-and-btns">
        <ul class="modal-project-tags">
          <li class="modal-project-tag">html</li>
          <li class="modal-project-tag">css</li>
          <li class="modal-project-tag">javascript</li>
        </ul>
        <ul class="modal-btn-group">
          <li class="btn modal-btn">
            <a href=${projects[i].liveVersion} class="">See Live</a>
            <img src="images/see-live.png" alt="see live icon" class="modal-btn-img">
          </li>
          <li class="btn modal-btn">
            <a href=${projects[i].sourceLink} class="">See Source</a>
            <img src="images/modal-github.png" alt="github icon" class="modal-btn-img">
          </li>
        </ul>
      </div>
    </div>
    
  </div>
    `;
  });

  card1.appendChild(seeBtn);

  recentWorksSection.appendChild(workSection);
}

function closeModal() {
  document.body.style.overflow = 'scroll';
  document.querySelector('.modal-box').style.display = 'none';
}
closeModal();

// form validation

const form = document.querySelector('form');
const error = document.querySelector('.error');
const { email } = form.elements;

function showError(isError) {
  if (isError) {
    error.innerHTML = 'Email must be in Lower Case';
    error.style.display = 'block';
    email.classList.add('error-field');
  } else {
    error.innerHTML = '';
    error.style.display = 'none';
    email.classList.remove('error-field');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isLowerCase = email.value === email.value.toLowerCase();

  if (isLowerCase) {
    form.submit();
  } else {
    showError(true);
  }
});

// local storage
const formData = JSON.parse(localStorage.getItem('formData')) || {
  name: '',
  email: '',
  message: '',
};

const save = (key, value) => {
  formData[key] = value;
  localStorage.setItem('formData', JSON.stringify(formData));
};

const nameField = form.elements.name;
nameField.value = formData.name;
nameField.addEventListener('keyup', (e) => {
  save('name', e.target.value);
});

const emailField = form.elements.email;
emailField.value = formData.email;
emailField.addEventListener('keyup', (e) => {
  save('email', e.target.value);
});

const messageField = form.elements.message;
messageField.value = formData.message;
messageField.addEventListener('keyup', (e) => {
  save('message', e.target.value);
});