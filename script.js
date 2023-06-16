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
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/snap-card-3.png',
    technologies: ['html', 'css', 'javascript'],
    liveVersion: 'https://dianabeki.github.io/Portfolio-website/',
    sourceLink: 'https://github.com/DianaBeki/Portfolio-website',
  },
  {
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/Snap-card-5.png',
    technologies: ['html', 'css', 'javascript'],
    liveVersion: 'https://dianabeki.github.io/Portfolio-website/',
    sourceLink: 'https://github.com/DianaBeki/Portfolio-website',
  },
  {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/snap-card-2.png',
    technologies: ['html', 'css', 'javascript'],
    liveVersion: 'https://dianabeki.github.io/Portfolio-website/',
    sourceLink: 'https://github.com/DianaBeki/Portfolio-website',
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