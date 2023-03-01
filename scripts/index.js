let editProfile = document.querySelector('.profile__button-edit');
let popupEdit = document.querySelector('.popup__edit');
let closeProfile = popupEdit.querySelector('.popup__button-close');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
let formElement = popupEdit.querySelector('.popup__form');
let nameInput = popupEdit.querySelector('.popup__input_value_name');
let jobInput = popupEdit.querySelector('.popup__input_value_job');

let popupAddPhoto = document.querySelector('.popup__add');
let addPhoto = document.querySelector('.profile__button-add');
let closeAddPhoto = popupAddPhoto.querySelector('.popup__button-close');
let form = popupAddPhoto.querySelector('.popup__form');
let placeInput = popupAddPhoto.querySelector('.popup__input_value_place');
let linkInput = popupAddPhoto.querySelector('.popup__input_value_link');

let elements = document.querySelector('.elements');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинск',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорск',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const createCard = (card) => {
  let cardTemplate = document.querySelector('#cardTemplate').content.cloneNode(true);
  let cardName = cardTemplate.querySelector('.element__title');
  cardName.textContent = card.name;
  let cardLink = cardTemplate.querySelector('.element__photo');
  cardLink.setAttribute('src', card.link);
  cardLink.alt = `${card.name}`;
  let likeButton = cardTemplate.querySelector('.element__button-like');
  likeButton.addEventListener('click', (e) => {
    e.target.classList.toggle('element__button-like_active');
  });
  let delButton = cardTemplate.querySelector('.element__button-del');
  delButton.addEventListener('click', (e) => {
    e.target.closest('.element').remove();
  });
  elements.prepend(cardTemplate);
}

initialCards.forEach(createCard);

editProfile.addEventListener('click', () => {
  popupEdit.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

addPhoto.addEventListener('click', () => {
  popupAddPhoto.classList.add('popup_opened');
  placeInput.value = '';
  linkInput.value = '';
});

const hideProfilePopup = () => {
  popupEdit.classList.remove('popup_opened');
}
closeProfile.addEventListener('click', hideProfilePopup);

const hideAddPopup = () => {
  popupAddPhoto.classList.remove('popup_opened');
}
closeAddPhoto.addEventListener('click', hideAddPopup);

function handleFormEditSubmit (e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  hideProfilePopup();
}

function handleFormAddSubmit (e) {
  e.preventDefault();
  const name = placeInput.value;
  const link = linkInput.value;
  const card = {name,link};
  createCard(card);
  hideAddPopup();
  }


formElement.addEventListener('submit', handleFormEditSubmit);
form.addEventListener('submit', handleFormAddSubmit)
